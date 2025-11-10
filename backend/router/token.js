const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const Users = require("../models/Users");

let refreshTokens = [];

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const authUser = await Users.findOne({ username }).exec();

  if (!authUser)
    return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, authUser.password);
  if (!isMatch)
    return res.status(400).json({ message: "Please provide correct credentials!" });

  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

  refreshTokens.push(refreshToken);

  // Set both tokens as secure cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false, // ⚠️ false for localhost, true in production (HTTPS)
    sameSite: "Lax",
    maxAge: 10 * 60 * 1000,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ success: true });
});

router.get("/verify", (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ authenticated: true, user });
  });
});

router.get("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "10m",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 10 * 60 * 1000,
    });

    res.json({ success: true });
  });
});

router.post("/logout", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({ success: true });
});

module.exports = router;
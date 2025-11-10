require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken; // <-- read JWT from cookie
    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user; // now available in your route
        next();
    });
};

module.exports = authenticateToken;
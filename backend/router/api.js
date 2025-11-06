const express = require("express")
const router = express.Router()
const authenticateToken = require("../middleware/authenticate")
const Users = require("../models/Users")

// router.get("/tickets", authenticateToken, (req, res) => {
//     res.json(tickets.filter(post => post.username === req.user.name))
// })

router.post('/user', async (req, res) => {
    const user = new Users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        department: req.body.department,
        isAdmin: req.body.isAdmin
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router
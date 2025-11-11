const express = require("express")
const router = express.Router()
const Users = require("../models/Users")
const bcrypt = require("bcrypt")
const authenticate = require("../middleware/authenticate")

// router.use(authenticate)

router.get('/user', async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

router.post('/user', async (req, res) => {
    const hashSalt = 10
    const hashedPassword = await bcrypt.hash(req.body.password, hashSalt)
    const user = new Users({
        username: req.body.username,
        password: hashedPassword,
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
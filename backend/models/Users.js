const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    username: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phoneNumber: {
        required: true,
        type: String
    },
    department: {
        required: true,
        type: String
    },
    isAdmin: {
        required: true,
        type: Boolean,
        default: false
    },
    firstLogOn: {
        type: Date,
        default: null
    }
})

module.exports = mongoose.model("Users", UsersSchema)
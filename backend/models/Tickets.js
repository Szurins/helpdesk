const mongoose = require("mongoose")

const TicketsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requester: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    },
    assignedAdmin: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        default: null
    },
    status: {
        type: String,
        enum: ["open", "in-progress", "closed"],
        default: "open",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Tickets", TicketsSchema)
const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    type: {
        type: String,
    },
    entity_type: {
        type: String,
        enum: ["owner", "upper_management", "lower_management", "employee"],
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
});

const user = mongoose.model("user", userModel);
module.exports = user;
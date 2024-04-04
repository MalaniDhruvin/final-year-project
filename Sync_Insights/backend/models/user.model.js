const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    // type: {
    //     type: String,
    // },
    // entity_type: {
    //     type: String,
    //     enum: ["owner", "upper_management", "lower_management", "employee"],
    // },
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    position: {
        type: String,
        enum: ["Manager", "Analyst", "Associate"],
    },
    department: {
        type: String,
        enum: ["tech", "hr", "marketing", "design"],
    },
    // phone: {
    //     type: String,
    // },
    // address: {
    //     type: String,
    // },
});



const User = mongoose.model("User", userModel);
module.exports = User;
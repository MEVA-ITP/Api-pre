const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    phone: {type: String, required: true},
    external: {type: Boolean, required: true},
    active: {type: Boolean, required: true}, // externale == false => auto on
    fname: String, // Only required if external
    lname: String, // Only required if external
})

module.exports = mongoose.model("User", userSchema)
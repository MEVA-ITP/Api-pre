const mongoose = require("mongoose")

const user = new mongoose.Schema({
    email: {type: String, required: true},
    phone: {type: String, required: true},
    external: {type: Boolean, required: true},
    active: {type: Boolean, required: true}, // externale == false => auto on
    fname: String, // Only required if external
    lname: String, // Only required if external
})

const equipment = new mongoose.Schema({
    name: {type: String, required: true},
    serial: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: ["ok", "broken","not available"], required: true}, // Other?
    attributes: {type: Object, required: true},
    //tags: [String]
})

const reservation = new mongoose.Schema({
    user: {type: 'ObjectId', ref: 'user', required: true},
    equipment: {type: 'ObjectId', ref: 'equipment', required: true},
    from: {type: Date, required: true},
    to: {type: Date, required: true},
})

const damage = new mongoose.Schema({
    user: {type: 'ObjectId', ref: 'user', required: true},
    equipment: {type: 'ObjectId', ref: 'equipment', required: true},
    time: {type: Date, require},
    description: {type: String, required: true},
    status: {type: ["broken", "in_repair", "repaired"], required: true},
})

module.exports = {user, equipment, reservation, damage};
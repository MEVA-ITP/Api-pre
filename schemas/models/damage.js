const mongoose = require("mongoose")

const damageSchema = new mongoose.Schema({
    user: {type: 'ObjectId', ref: 'User', required: true},
    equipment: {type: 'ObjectId', ref: 'Equipment', required: true},
    time: {type: Date, require},
    description: {type: String, required: true},
    status: {type: ["broken", "in_repair", "ok", "not_available"], required: true},
})

module.exports = mongoose.model("Damage", damageSchema)
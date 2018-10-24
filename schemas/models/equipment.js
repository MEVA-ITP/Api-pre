const mongoose = require("mongoose")

const equipmentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    serial: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: ["ok", "broken", "not available"], required: true}, // Other?
    attributes: {type: Object, required: true},
    tags: [String]
})

module.exports = equipmentSchema
const Schema = require("schm")

const user = new Schema({
    email: {type: String, required: true},
    phone: {type: String, required: true},
    external: {type: Boolean, required: true},
    active: {type: Boolean, required: true}, // externale == false => auto on
    fname: String, // Only required if external
    lname: String, // Only required if external
})

const equipment = new Schema({
    serial: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: ["ok", "broken"], required: true}, // Other?
    attributes: {type: Object, required: true},
    tags: [String],
})

const reservation = new Schema({
    user: {type: user, required: true},
    equipment: {type: [equipment], required: true},
    from: {type: Date, required: true},
    to: {type: Date, required: true},
})

const damage = new Schema({
    user: {type: user, required: true},
    equipment: {type: [equipment], required: true},
    time: {type: Date, require},
    description: {type: String, required: true},
    status: {type: ["broken", "in_repair", "repaired"], required: true},
})
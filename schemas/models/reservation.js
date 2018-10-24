const mongoose = require("mongoose")
// REF: https://mongoosejs.com/docs/2.8.x/docs/populate.html
const reservationSchema = new mongoose.Schema({
    user: {type: 'ObjectId', ref: 'User', required: true},
    equipment: {type: 'ObjectId', ref: 'Equipment', required: true},
    from: {type: Date, required: true},
    to: {type: Date, required: true},
})

module.exports = mongoose.model("Reservation", reservationSchema)
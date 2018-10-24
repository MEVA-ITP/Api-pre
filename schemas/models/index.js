const User = require("./user")
const Equipment = require("./equipment")
const Reservation = require("./reservation")
const Damage = require("./damage")

const schemas = {
    User,
    Equipment,
    Reservation,
    Damage
}

module.exports = (connection) => {
    let ret = {}

    for(let key in schemas) {
        ret[key] = connection.model(key, schemas[key])
    }

    return ret
}
const models = require("./models")
const mongoose = require('mongoose')

const connect = async () => {
    const connection = await mongoose.createConnection("mongodb://localhost:27017/onquip")
    console.log("CONNECTED")

    const {User, Equipment} = models

    const fletzi = new User({
        email: 'mfletzberger@student.tgm.ac.at',
        phone: '+4367762083432',
        external: false,
        active: true
    })
    console.log("SAVE")
    await fletzi.save()
    console.log("INSERTED User")

    const canon = new Equipment({
        name: 'Kuhle Canon',
        serial: '12345678900987654321',
        description: 'Eine dolle Kamera!',
        status: "ok",
        attributes: {linse: 4, gewicht: 32}
    })
    await canon.save()
    console.log("INSERTED Canon")
}

connect()
    .then((out) => {
        console.log("FINISHED")
        if (out) console.log(out)
    })
    .catch((error) => {
        console.error("ERROR")
        console.error(error)
    })
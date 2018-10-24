const createModels = require("./models")
const mongoose = require('mongoose')

const connect = async () => {
    // Creating connection
    const connection = await mongoose.createConnection("mongodb://localhost:27017/onquip")
    console.log("CONNECTED")

    // Importing and configuring models
    const {User, Equipment, Reservation, Damage} = createModels(connection)

    // Works too, please user other style.
    // Reason: we are working object oriented
    // Exception: inserting many.
    /*console.log(await User.insertMany([
        {
            email: 'mfletzberger@student.tgm.ac.at',
            phone: '+436503303596',
            external: false,
            active: true
        }
    ]))*/

    const fletzi = new User({
        email: 'mfletzberger@student.tgm.ac.at',
        phone: '+436503303596',
        external: false,
        active: true
    })
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

    const first_res = new Reservation({
        user: fletzi,
        equipment: canon,
        from: new Date(),
        to: new Date(),
    })
    await first_res.save()
    console.log("INSERTED res")

    const first_damage = new Damage({
        user: fletzi._id,
        equipment: canon._id,
        time: new Date(),
        description: "Testing the test",
        status: "broken",
    })
    await first_damage.save()
    console.log("INSERTED damage")

    // Close connection after we don't need it anymore
    connection.close()
}

// Tell us we are finished or log us the error
connect()
    .then((out) => {
        console.log("FINISHED")
        if (out) console.log(out)
    })
    .catch((error) => {
        console.error("ERROR")
        console.error(error)
    })
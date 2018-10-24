const schemas = require("./schema");
const mongoose = require('mongoose')

const connection = mongoose.createConnection('mongodb://localhost:27017/onquip', {},
    (error) => {
        if (error) {
            console.error("ERROR", error)
        } else {
            console.log("Connected")
            const User = connection.model('user',schemas.user);

            User.insertMany([
                {
                    email: 'mfletzberger@student.tgm.ac.at',
                    phone: '+4367762083432',
                    external: false,
                    active: true
                }
            ],function(err){
                if (err) return err;
                console.log("Insert user")
            });

            const Equip = connection.model('equip',schemas.equipment);
            Equip.insertMany([
                {
                    name: 'Kuhle Canon',
                    serial: '12345678900987654321',
                    description: 'Eine dolle Kamera!',
                    status: "ok",
                    attributes: {linse: 4, gewicht: 32}
                },
            ],function(err){
                if (err) return err;
                console.log('insert equip')
            });

            const Reserv = connection.model('reserv',schemas.reservation);
            Reserv.insertMany([
                {
                    user: User.find({email: 'mfletzberger@student.tgm.ac.at'}).exec(callback),
                    equipment: true,
                    from: '2018-10-24',
                    to: '2018-10-30'
                },
            ],function(err){
                if (err) return err;
                console.log('insert reserv')
                connection.close();
            });
        }
})



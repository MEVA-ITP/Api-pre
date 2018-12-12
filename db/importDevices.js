const database = require("./database/database").database
const Device = require("./database/Models").Device
const fs = require("fs")

async function main() {

    let file = fs.readFileSync("./deviceData.json")
    let data = JSON.parse(file)

    let i = 0
    for (let dev of data) {

        dev.description = "Des"
        dev.status = "ok"
        dev.attributes = {}
        dev.serial = "xxx"
        dev.tags = [dev.tags]

        let d = new Device(dev)
        let error = d.validateSync()

        if (error) {
            console.log(`Errors for entry ${i}:`)
            for (let e in error.errors) {
                console.log(error.errors[e].message)
            }
        } else {
            await d.save()
            console.log(`Imported device ${i}`)
        }

        i++
    }
}

main()
    .then(() => console.log("Finished"))
    .catch((e) => console.error(e.message))
    .finally(() => database.close())


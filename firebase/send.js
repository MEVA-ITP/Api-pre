let admin = require("firebase-admin");

let serviceAccount = require("./onquip-firebase-adminsdk-6qdvh-f47337a8e5.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://onquip.firebaseio.com"
});

const registrationToken = "ekczpsV_EeM:APA91bHPyhyFk4GerHip5MREgeQDitbJzXLm7lmB08Ykyx6wZ_WtDpe2ZTqWcGkwa1dC8UXC6fLAMuYZs6qhh8Q1hnwieeJzJd9vtEuu7khPpL0wySZa8uYkQaWA4KU-OtUrjBsVR8f6"

let message = {
    token: registrationToken,
    notification: {
        title: "Hello",
        body: "World",
    }
}

admin.messaging().send(message)
    .then((response) => {
        console.log("OK", response)
    })
    .catch((error) => {
        console.log("ERROR", error)
    })
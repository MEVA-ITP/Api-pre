importScripts("https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/5.5.5/firebase-messaging.js")

let config = {
    apiKey: "AIzaSyDqEyEay4QvQd-9tPwP8McJSJrPnzE_QbQ",
    authDomain: "onquip.firebaseapp.com",
    databaseURL: "https://onquip.firebaseio.com",
    projectId: "onquip",
    storageBucket: "onquip.appspot.com",
    messagingSenderId: "436957857147"
};
firebase.initializeApp(config);

const messagaing = firebase.messaging();

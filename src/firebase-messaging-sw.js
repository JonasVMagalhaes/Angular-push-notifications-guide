importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAndmQzAbeA-doUYfqg0Ye6Ag6VFBP7OlI",
    authDomain: "easy-f3601.firebaseapp.com",
    databaseURL: "https://easy-f3601.firebaseio.com",
    projectId: "easy-f3601",
    storageBucket: "easy-f3601.appspot.com",
    messagingSenderId: "907960156016",
    appId: "1:907960156016:web:f21de964a3e85499ded9b5",
    measurementId: "G-RWQJ7N3J1R"
});

const messaging = firebase.messaging();
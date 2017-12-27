import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB62Fl41DtDxTtezlrkdvUWwgfQBrRUEKI",
    authDomain: "learn-en-words.firebaseapp.com",
    databaseURL: "https://learn-en-words.firebaseio.com",
    projectId: "learn-en-words",
    storageBucket: "learn-en-words.appspot.com",
    messagingSenderId: "332194151648"
};

firebase.initializeApp(config);

export default firebase;
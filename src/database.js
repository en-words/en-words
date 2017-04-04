import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBxPj7zxNJwFohR3RdJ3WiaTGo1v1kg-Kk",
    authDomain: "en-words-react.firebaseapp.com",
    databaseURL: "https://en-words-react.firebaseio.com",
    storageBucket: "en-words-react.appspot.com"
};

firebase.initializeApp(config);

export default firebase.database();

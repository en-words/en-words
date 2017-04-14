import firebase from 'firebase';

// firebase database scheme that used for the application
/*root: {
    groups: [
        groupId (string): {
            groupName: 'string'
        },
        ...
    ]
    words: {
        groupId (string): {
            wordId (string): {
                word: 'string',
                translation: 'string',
                comments: 'string'
            },
            ...
        },
        ...
    }
}*/

const config = {
    apiKey: "AIzaSyB62Fl41DtDxTtezlrkdvUWwgfQBrRUEKI",
    authDomain: "learn-en-words.firebaseapp.com",
    databaseURL: "https://learn-en-words.firebaseio.com",
    projectId: "learn-en-words",
    storageBucket: "learn-en-words.appspot.com",
    messagingSenderId: "332194151648"
};

firebase.initializeApp(config);

export default firebase.database();

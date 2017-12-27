import firebase from './firebase';


// firebase database scheme that used for the application
/*
    root: {
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
    }
 */

export default firebase.database();

import firebase from './firebase';
import store from './store';
import { LOGIN_USER, LOGOUT_USER } from './users/constants/actionTypes';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch({
            type: LOGIN_USER,
            payload: {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email
            }
        })
    } else {
        store.dispatch({
            type: LOGOUT_USER
        })
    }
});

export default firebase.auth();

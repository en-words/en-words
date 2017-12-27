import auth from './../../auth';

export const login = (email, password) => {
    return dispatch => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log('Login error: ' + error.message);
            });
    }
};

export const logout = () => {

    return dispatch => {
        auth.signOut()
            .catch(function(error) {
                console.log('Logout error: ' + error.message);
            });
    }
};

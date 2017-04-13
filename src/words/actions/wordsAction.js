import * as types from '../constants/actionTypes';
import database from './../../database';

export const fetchWords = (groupId) => {
    return dispatch => {
        database.ref(`words/${groupId}`)
            .on('value', snapshot => {
                let data = snapshot.val();
                let result = [];

                if(data) {
                    Object.keys(data).map(key => result.push({
                        id: key,
                        word: data[key].word,
                        translation: data[key].translation,
                        comments: data[key].comments
                    }));
                }

                dispatch({
                    type: types.FETCH_WORDS,
                    payload: result
                })
            })
    }
};


export const searchWords = (groupId, searchText) => {

};

export const addWord = (word) => {

};

export const updateWord = (word) => {

};

export const deleteWord = (id) => {

};


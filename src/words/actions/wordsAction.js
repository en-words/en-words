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

export const addWord = (wordData) => {
    return dispatch => {
        database.ref(`words/${wordData.groupId}`)
            .push({
                word: wordData.word,
                translation: wordData.translation,
                comments: wordData.comments
            })
    }
};

export const updateWord = (wordData) => {
    return dispatch => {
        database.ref(`words/${wordData.groupId}/${wordData.id}`)
            .set({
                word: wordData.word,
                translation: wordData.translation,
                comments: wordData.comments
            })
    }
};

export const deleteWord = (groupId, id) => {
    return dispatch => {
        database.ref(`words/${groupId}/${id}`)
            .remove()
    }
};


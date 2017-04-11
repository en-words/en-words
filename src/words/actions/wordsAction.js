import * as types from '../constants/actionTypes';
import database from './../../database';


export const fetchWords = (groupId) => {
    return dispatch => {
        database.ref(`words/${groupId}`)
            .on('value', snapshot => {
                let data = snapshot.val();
                let result = [];

                Object.keys(data).map(key => result.push({
                    id:key,
                    word:data[key].word,
                    translation: data[key].translation,
                    comments: data[key].comments}));

                dispatch({
                    type: types.FETCH_WORDS,
                    payload: result
                })
            })
    }
};

/*
export const searchWords = (groupId, searchText) => {
    const request = axios({
        method: 'get',
        url: `${WORDS_API_URL}/search?groupId=${groupId}&searchText=${searchText}`
    });

    return {
        type: SEARCH_WORDS,
        payload: request
    };
};

export const addWord = (word) => {
    const request = axios({
        method: 'post',
        url: WORDS_API_URL,
        data: {
            ...word
        }
    });

    return {
        type: ADD_WORD,
        payload: request
    };
};

export const updateWord = (word) => {
    const request = axios({
        method: 'put',
        url: WORDS_API_URL + '/' + word.id,
        data: {
            ...word
        }
    });

    return {
        type: UPDATE_WORD,
        payload: request
    };
};


*/

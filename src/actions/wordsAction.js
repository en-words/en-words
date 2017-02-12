import axios from 'axios';

import { REST_API_URL } from '../common/AppSettings'

// Word list
export const FETCH_WORDS = 'FETCH_WORDS';
export const FETCH_WORDS_PENDING = 'FETCH_WORDS_PENDING';
export const FETCH_WORDS_FULFILLED = 'FETCH_WORDS_FULFILLED';
export const FETCH_WORDS_REJECTED = 'FETCH_WORDS_REJECTED';

// Word list
export const SEARCH_WORDS = 'SEARCH_WORDS';
export const SEARCH_WORDS_PENDING = 'SEARCH_WORDS_PENDING';
export const SEARCH_WORDS_FULFILLED = 'SEARCH_WORDS_FULFILLED';
export const SEARCH_WORDS_REJECTED = 'SEARCH_WORDS_REJECTED';

// Word add
export const ADD_WORD = 'ADD_WORD';
export const ADD_WORD_FULFILLED = 'ADD_WORD_FULFILLED';
export const ADD_WORD_REJECTED = 'ADD_WORD_REJECTED';

// Update word
export const UPDATE_WORD = 'UPDATE_WORD';
export const UPDATE_WORD_FULFILLED = 'UPDATE_WORD_FULFILLED';
export const UPDATE_WORD_REJECTED = 'UPDATE_WORD_REJECTED';

// Delete word
export const DELETE_WORD = 'DELETE_WORD';
export const DELETE_WORD_FULFILLED = 'DELETE_WORD_FULFILLED';
export const DELETE_WORD_REJECTED = 'DELETE_WORD_REJECTED';

// Word modal form
export const CLOSE_WORD_MODAL_FORM = 'CLOSE_WORD_MODAL_FORM';
export const EDIT_WORD = 'EDIT_WORD';
export const NEW_WORD = 'NEW_WORD';

const WORDS_API_URL = REST_API_URL + 'words';

export const fetchWords = (groupId) => {
    const request = axios({
        method: 'get',
        url: `${WORDS_API_URL}?groupId=${groupId}`
    });

    return {
        type: FETCH_WORDS,
        payload: request
    };
};

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

export const deleteWord = (id) => {
    const request = axios({
        method: 'delete',
        url: WORDS_API_URL + '/' + id,
        id: id
    });

    return {
        type: DELETE_WORD,
        payload: request
    };
};

export const closeWordModalForm = () => {
    return {
        type: CLOSE_WORD_MODAL_FORM
    }
};

export const newWord = () => {
    return {
        type: NEW_WORD
    }
};

export const editWord = (word) => {
    return {
        type: EDIT_WORD,
        payload: word
    }
};

import axios from 'axios';

import { REST_API_URL } from '../common/AppSettings'

//Word list
export const FETCH_WORDS = 'FETCH_WORDS';
export const FETCH_WORDS_PENDING = 'FETCH_WORDS_PENDING';
export const FETCH_WORDS_FULFILLED = 'FETCH_WORDS_FULFILLED';
export const FETCH_WORDS_REJECTED = 'FETCH_WORDS_REJECTED';

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
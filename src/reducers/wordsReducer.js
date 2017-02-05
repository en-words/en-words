import { FETCH_WORDS_PENDING, FETCH_WORDS_FULFILLED, FETCH_WORDS_REJECTED } from '../actions/wordsAction';

const initialState = {
    wordList: {
        words: [],
        error: null,
        loading: false
    }
};

export default function(state = initialState, action){

    switch(action.type) {

        // Fetch word actions
        case FETCH_WORDS_PENDING:
            return {
                ...state,
                wordList: {error: null, loading: true}
            };
        case FETCH_WORDS_FULFILLED:
            return {
                ...state,
                wordList: {words: action.payload.data, error: null, loading: false}
            };
        case FETCH_WORDS_REJECTED: {
            return {
                ...state,
                wordList: {words: [], error: action.payload || {message: action.payload.message}, loading: false}
            };
        }

        default:
            return state;
    }
}
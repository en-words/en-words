import { FETCH_WORDS_PENDING, FETCH_WORDS_FULFILLED, FETCH_WORDS_REJECTED,
         ADD_WORD_FULFILLED, ADD_WORD_REJECTED,
         UPDATE_WORD_FULFILLED, UPDATE_WORD_REJECTED,
         DELETE_WORD_FULFILLED, DELETE_WORD_REJECTED,
         CLOSE_WORD_MODAL_FORM, NEW_WORD, EDIT_WORD,
         SEARCH_WORDS_PENDING, SEARCH_WORDS_FULFILLED, SEARCH_WORDS_REJECTED } from '../actions/wordsAction';

const initialState = {
    wordList: {
        words: [],
        error: null,
        loading: false
    },
    showWordForm: false,
    wordForm: null
};

const compareWord = (a, b) => {
    if (a.id === b.id)
        return 0;

    if (a.id > b.id)
        return 1;
    else
        return -1;
};

export default function(state = initialState, action){

    switch(action.type) {

        // Fetch word actions
        case FETCH_WORDS_PENDING:
            return {
                ...state,
                wordList: {
                    error: null,
                    loading: true
                }
            };
        case FETCH_WORDS_FULFILLED:
            return {
                ...state,
                wordList: {
                    words: action.payload.data.sort(compareWord),
                    error: null,
                    loading: false
                }
            };
        case FETCH_WORDS_REJECTED: {
            return {
                ...state,
                wordList: {
                    words: [],
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };
        }

        // Search word actions
        case SEARCH_WORDS_PENDING:
            return {
                ...state,
                wordList: {
                    error: null,
                    loading: true
                }
            };
        case SEARCH_WORDS_FULFILLED:
            return {
                ...state,
                wordList: {
                    words: action.payload.data,
                    error: null,
                    loading: false
                }
            };
        case SEARCH_WORDS_REJECTED: {
            return {
                ...state,
                wordList: {
                    words: [],
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };
        }

        // Add word actions
        case ADD_WORD_FULFILLED:
            return {
                ...state,
                wordList: {
                    words: state.wordList.words.concat(action.payload.data),
                    error: null,
                    loading: false
                }
            };
        case ADD_WORD_REJECTED:
            return {
                ...state,
                wordList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Update word actions
        case UPDATE_WORD_FULFILLED:
            return {
                ...state,
                wordList: {
                    words: state.wordList.words
                        .map((word) => {
                            if (word.id === action.payload.data.id) {
                                return Object.assign({}, word, {...action.payload.data})
                            }
                            return word
                        }),
                    error: null,
                    loading: false
                }
            };
        case UPDATE_WORD_REJECTED:
            return {
                ...state,
                wordList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Delete word actions
        case DELETE_WORD_FULFILLED:
            console.log("action.id: " + action.id);
            return {
                ...state,
                wordList: {
                    words: state.wordList.words.filter(word => word.id !== action.payload.config.id),
                    error: null,
                    loading: false
                }
            };
        case DELETE_WORD_REJECTED:
            return {
                ...state,
                wordList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Modal word form
        case CLOSE_WORD_MODAL_FORM:
            return {
                ...state,
                showWordForm: false
            };
        case NEW_WORD:
            return {
                ...state,
                showWordForm: true,
                wordForm: null
            };
        case EDIT_WORD:
            return {
                ...state,
                showWordForm: true,
                wordForm: action.payload
            };

        default:
            return state;
    }
}
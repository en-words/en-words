import * as types from '../constants/actionTypes';

const initialState = {
    words: []
};

export default function(state = initialState, action){

    switch(action.type) {

        case types.FETCH_WORDS:
            return {
                ...state,
                words: action.payload
            };

        case types.SEARCH_WORDS:
            return {
                ...state,
                words: action.payload
            };

        default:
            return state;
    }
}
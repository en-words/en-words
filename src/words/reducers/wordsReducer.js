import * as types from '../constants/actionTypes';

const initialState = {
    words: []
};

export default function(state = initialState, action){

    switch(action.type) {

        case types.FETCH_WORDS:
            return {
                ...state,
                words: action.payload.sort((a, b) =>
                    a.id.localeCompare(b.id, undefined, {numeric: true, sensitivity: 'base'}))
            };

        case types.SEARCH_WORDS:
            return {
                ...state,
                words: action.payload.data.sort((a, b) =>
                    a.id.localeCompare(b.id, undefined, {numeric: true, sensitivity: 'base'}))
            };

        default:
            return state;
    }
}
import { FETCH_GROUPS_PENDING, FETCH_GROUPS_FULFILLED, FETCH_GROUPS_REJECTED,
         ADD_GROUP_FULFILLED } from '../actions/groupsAction';

const initialState = {
    groupList: {
        groups: [],
        error: null,
        loading: false
    }
};

export default function(state = initialState, action){

    switch(action.type) {
        case FETCH_GROUPS_PENDING:
            return {...state, groupList: {groups: [], error: null, loading: true}};
        case FETCH_GROUPS_FULFILLED:
            return {...state, groupList: {groups: action.payload.data, error: null, loading: false}};
        case FETCH_GROUPS_REJECTED: {
            console.log("action: " + action.payload);
            return {
                ...state,
                groupList: {groups: [], error: action.payload || {message: action.payload.message}, loading: false}
            };
        }
        case ADD_GROUP_FULFILLED:
            return state;
        default:
            return state;
    }
}
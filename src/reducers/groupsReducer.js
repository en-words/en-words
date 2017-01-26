import { FETCH_GROUPS, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE, RESET_GROUPS} from '../actions/groupsAction';

const initialState = {
    groups: [],
    error: null,
    loading: false
};


export function groups(state = initialState, action){

    let error;
    switch(action.type) {

        case FETCH_GROUPS:
            return {...state, groups: [], error: null, loading: true};
        case FETCH_GROUPS_SUCCESS:
            return {...state, groups: action.payload, error: null, loading: false};
        case FETCH_GROUPS_FAILURE:
            error = action.payload || {message: action.payload.message};
            return {...state, groups: [], error: error, loading: false};
        case RESET_GROUPS:
            return {...state, groups: [], error: null, loading: false};
        default:
            return state;
    }
}
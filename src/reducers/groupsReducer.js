import { FETCH_GROUPS_PENDING, FETCH_GROUPS_FULFILLED, FETCH_GROUPS_REJECTED,
         ADD_GROUP_FULFILLED, ADD_GROUP_REJECTED,
         DELETE_GROUP_FULFILLED, DELETE_GROUP_REJECTED,
         SELECT_GROUP, RESET_SELECT_GROUP,
         SHOW_GROUP_MODAL_FORM } from '../actions/groupsAction';

import { browserHistory } from 'react-router';

const initialState = {
    groupList: {
        groups: [],
        error: null,
        loading: false
    },
    selectedGroup: null
};

export default function(state = initialState, action){

    switch(action.type) {

        // Fetch group actions
        case FETCH_GROUPS_PENDING:
            return {
                ...state,
                groupList: {groups: [], error: null, loading: true}
            };
        case FETCH_GROUPS_FULFILLED:
            return {
                ...state,
                groupList: {groups: action.payload.data, error: null, loading: false}
            };
        case FETCH_GROUPS_REJECTED: {
            return {
                ...state,
                groupList: {groups: [], error: action.payload || {message: action.payload.message}, loading: false}
            };
        }

        // Add group actions
        case ADD_GROUP_FULFILLED:
            return {
                ...state,
                groupList: {groups: state.groupList.groups.concat(action.payload.data), error: null, loading: false}
            };
        case ADD_GROUP_REJECTED:
            return {
                ...state,
                groupList: {error: action.payload || {message: action.payload.message}, loading: false}
            };

        // Delete group actions
        case DELETE_GROUP_FULFILLED:
            return {
                ...state,
                groupList: {
                    groups: state.groupList.groups.filter(group => group.groupId !== state.selectedGroup.groupId),
                    error: null,
                    loading: false
                }
            };
        case DELETE_GROUP_REJECTED:
            return {
                ...state,
                groupList: {error: action.payload || {message: action.payload.message}, loading: false}
            };

        // Select group actions
        case SELECT_GROUP: {
            if (action.payload !== null) {
                let selGroups = state.groupList.groups.filter(group => group.groupId.toString() === action.payload);
                let selectedGroup = null;
                if (selGroups && selGroups.length > 0) {
                    selectedGroup = selGroups[0];
                }

                return {
                    ...state,
                    selectedGroup: selectedGroup
                };
            } else {
                if (state.groupList.groups.length > 0) {
                    let selId = state.groupList.groups[state.groupList.groups.length - 1].groupId;
                    browserHistory.push(`words?groupId=${selId}`);

                    return {
                        ...state,
                        selectedGroup: state.groupList.groups[state.groupList.groups.length - 1]
                    };
                } else {
                    browserHistory.push('/');

                    return {
                        ...state,
                        selectedGroup: null
                    };
                }
            }

        }
        case RESET_SELECT_GROUP:
            return {
                ...state,
                selectedGroup: null
            };

        // Show/Hide group modal form
        case SHOW_GROUP_MODAL_FORM:
            return {
                ...state,
                showGroupForm: action.payload
            };

        default:
            return state;
    }
}
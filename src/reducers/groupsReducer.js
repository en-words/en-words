import { FETCH_GROUPS_PENDING, FETCH_GROUPS_FULFILLED, FETCH_GROUPS_REJECTED,
         ADD_GROUP_FULFILLED, ADD_GROUP_REJECTED,
         UPDATE_GROUP_FULFILLED, UPDATE_GROUP_REJECTED,
         DELETE_GROUP_FULFILLED, DELETE_GROUP_REJECTED,
         SELECT_GROUP, RESET_SELECT_GROUP } from '../actions/groupsAction';

import { browserHistory } from 'react-router';

import { compareItems } from '../utils';

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
                groupList: {
                    groups: [],
                    error: null,
                    loading: true
                }
            };
        case FETCH_GROUPS_FULFILLED:
            return {
                ...state,
                groupList: {
                    groups: action.payload.data.sort((a, b) => compareItems(a.group.toLowerCase(), b.group.toLowerCase())),
                    error: null,
                    loading: false
                }
            };
        case FETCH_GROUPS_REJECTED: {
            return {
                ...state,
                groupList: {
                    groups: [],
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };
        }

        // Add group actions
        case ADD_GROUP_FULFILLED:
            return {
                ...state,
                groupList: {
                    groups: state.groupList.groups
                        .concat(action.payload.data)
                        .sort((a, b) => compareItems(a.group.toLowerCase(), b.group.toLowerCase())),
                    error: null,
                    loading: false
                }
            };
        case ADD_GROUP_REJECTED:
            return {
                ...state,
                groupList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Update group actions
        case UPDATE_GROUP_FULFILLED:
            return {
                ...state,
                groupList: {
                    groups: state.groupList.groups
                        .map((group) => {
                            if (group.groupId === action.payload.data.groupId) {
                                return Object.assign({}, group, {
                                    group: action.payload.data.group
                                })
                            }
                            return group
                        })
                        .sort((a, b) => compareItems(a.group.toLowerCase(), b.group.toLowerCase())),
                    error: null,
                    loading: false
                },
                selectedGroup: action.payload.data
            };
        case UPDATE_GROUP_REJECTED:
            return {
                ...state,
                groupList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
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
                groupList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
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

        default:
            return state;
    }
}
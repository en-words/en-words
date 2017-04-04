import * as types from '../constants/actionTypes';

import { browserHistory } from 'react-router';

import { compareItems } from '../../utils/common';

const initialState = {
    groups: [],
    selectedGroup: null
};

export default function(state = initialState, action){

    switch(action.type) {

        case types.FETCH_GROUPS:
            return {
                ...state,

                //groups: Object.keys(action.payload).map((key) => {'id':key, 'name':action.payload[key]}),


                groups: action.payload.sort((a, b) => compareItems(a.name.toLowerCase(), b.name.toLowerCase()))

            };

        // Add group actions
        case types.ADD_GROUP_FULFILLED:
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
        case types.ADD_GROUP_REJECTED:
            return {
                ...state,
                groupList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Update group actions
        case types.UPDATE_GROUP_FULFILLED:
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
        case types.UPDATE_GROUP_REJECTED:
            return {
                ...state,
                groupList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Delete group actions
        case types.DELETE_GROUP_FULFILLED:
            return {
                ...state,
                groupList: {
                    groups: state.groupList.groups.filter(group => group.groupId !== state.selectedGroup.groupId),
                    error: null,
                    loading: false
                }
            };
        case types.DELETE_GROUP_REJECTED:
            return {
                ...state,
                groupList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Select group actions
        case types.SELECT_GROUP: {
            if (action.payload !== null) {
                let selGroups = state.groups.groups.filter(group => group.id.toString() === action.payload);
                let selectedGroup = null;
                if (selGroups && selGroups.length > 0) {
                    selectedGroup = selGroups[0];
                }

                return {
                    ...state,
                    selectedGroup: selectedGroup
                };
            } else {
                if (state.groups.length > 0) {
                    let selId = state.groups.groups[state.groupList.groups.length - 1].id;
                    browserHistory.push(`words?groupId=${selId}`);

                    return {
                        ...state,
                        selectedGroup: state.groups.groups[state.groups.groups.length - 1]
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
        case types.RESET_SELECT_GROUP:
            return {
                ...state,
                selectedGroup: null
            };

        default:
            return state;
    }
}

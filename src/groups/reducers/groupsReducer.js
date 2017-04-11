import * as types from '../constants/actionTypes';

import { browserHistory } from 'react-router';

const initialState = {
    groups: [],
    selectedGroup: null
};

export default function(state = initialState, action){

    switch(action.type) {

        case types.FETCH_GROUPS:
            return {
                ...state,
                groups: action.payload.sort((a, b) =>
                    a.groupName.localeCompare(b.groupName, undefined, {numeric: true, sensitivity: 'base'}))
            };

        case types.SELECT_GROUP: {
            if (action.payload !== null) {
                let selGroups = state.groups.filter(group => group.id.toString() === action.payload);
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
                    let selId = state.groups[state.groups.length - 1].id;
                    browserHistory.push(`words?groupId=${selId}`);

                    return {
                        ...state,
                        selectedGroup: state.groups[state.groups.length - 1]
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

        default:
            return state;
    }
}

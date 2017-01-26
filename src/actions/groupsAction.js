import axios from 'axios';

import {REST_API_URL} from '../common/AppSettings'

//Group list
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE';
export const RESET_GROUPS = 'RESET_GROUPS';

export function fetchGroups() {
    const request = axios({
        method: 'get',
        url: REST_API_URL + 'groups',
        headers: []
    });

    return {
        type: FETCH_GROUPS,
        payload: request
    };
}

export function fetchGroupsSuccess(groups) {
    return {
        type: FETCH_GROUPS_SUCCESS,
        payload: groups
    };
}

export function fetchGroupsFailure(error) {
    return {
        type: FETCH_GROUPS_FAILURE,
        payload: error
    };
}

import axios from 'axios';

import { REST_API_URL } from '../common/AppSettings'

//Group list
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_PENDING = 'FETCH_GROUPS_PENDING';
export const FETCH_GROUPS_FULFILLED = 'FETCH_GROUPS_FULFILLED';
export const FETCH_GROUPS_REJECTED = 'FETCH_GROUPS_REJECTED';

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
import axios from 'axios';

import { REST_API_URL } from '../common/AppSettings'

//Group list
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_PENDING = 'FETCH_GROUPS_PENDING';
export const FETCH_GROUPS_FULFILLED = 'FETCH_GROUPS_FULFILLED';
export const FETCH_GROUPS_REJECTED = 'FETCH_GROUPS_REJECTED';

// Group create
export const ADD_GROUP = 'ADD_GROUP';
export const ADD_GROUP_FULFILLED = 'ADD_GROUP_FULFILLED';
export const ADD_GROUP_REJECTED = 'ADD_GROUP_REJECTED';

// Group edit
export const EDIT_GROUP = 'EDIT_GROUP';

// Group delete
export const DELETE_GROUP = 'DELETE_GROUP';
export const DELETE_GROUP_FULFILLED = 'DELETE_GROUP_FULFILLED';
export const DELETE_GROUP_REJECTED = 'DELETE_GROUP_REJECTED';

// Select group
export const SELECT_GROUP = 'SELECT_GROUP';
export const RESET_SELECT_GROUP = 'RESET_SELECT_GROUP';

export const SHOW_GROUP_MODAL_FORM = 'SHOW_GROUP_MODAL_FORM';

const GROUPS_API_URL = REST_API_URL + 'groups';

export const fetchGroups = () => {
    const request = axios({
        method: 'get',
        url: GROUPS_API_URL
    });

    return {
        type: FETCH_GROUPS,
        payload: request
    };
};

export const addGroup = (groupName) => {
    const request = axios({
        method: 'post',
        url: GROUPS_API_URL,
        data: {
            group: groupName
        }
    });

    return {
        type: ADD_GROUP,
        payload: request
    };
};

export const editGroup = (id) => {
    const request = axios({
        method: 'get',
        url: GROUPS_API_URL + '/' + id
    });

    return {
        type: EDIT_GROUP,
        payload: request
    };
};

export const deleteGroup = (id) => {
    const request = axios({
        method: 'delete',
        url: GROUPS_API_URL + '/' + id
    });

    return {
        type: DELETE_GROUP,
        payload: request
    };
};

export const selectGroup = (id) => {

    return {
        type: SELECT_GROUP,
        payload: id
    };
};

export const resetSelectGroup = () => {
    return {
        type: RESET_SELECT_GROUP
    };
};

export const showGroupModalForm = (show) => {
    return {
        type: SHOW_GROUP_MODAL_FORM,
        payload: show
    }
};
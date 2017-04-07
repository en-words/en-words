import axios from 'axios';

import * as types from '../constants/actionTypes';
import * as urls from '../constants/apiUrls';
import database from './../../database';

export const fetchGroups = () => {

    return dispatch => {
        database.ref('groups').on('value', snapshot => {
            let data = snapshot.val();
            let result = [];

            Object.keys(data).map(key => result.push({id:key, groupName:data[key].groupName}));

            dispatch({
                type: types.FETCH_GROUPS,
                payload: result
            })
        })
    }
};

export const addGroup = (name) => {
    return dispatch => {
        database.ref().child('groups').push({name});
    };
};

export const updateGroup = (group) => {
    const request = axios({
        method: 'put',
        url: urls.GROUPS_API_URL + '/' + group.groupId,
        data: {
            groupId: group.groupId,
            group: group.group
        }
    });

    return {
        type: types.UPDATE_GROUP,
        payload: request
    };
};

export const deleteGroup = (id) => {
    const request = axios({
        method: 'delete',
        url: urls.GROUPS_API_URL + '/' + id
    });

    return {
        type: types.DELETE_GROUP,
        payload: request
    };
};

export const selectGroup = (id) => {

    return {
        type: types.SELECT_GROUP,
        payload: id
    };
};

export const resetSelectGroup = () => {
    return {
        type: types.RESET_SELECT_GROUP
    };
};

import axios from 'axios';

import { REST_API_URL } from '../common/AppSettings'

//Training list
export const FETCH_TRAININGS = 'FETCH_TRAININGS';
export const FETCH_TRAININGS_PENDING = 'FETCH_TRAININGS_PENDING';
export const FETCH_TRAININGS_FULFILLED = 'FETCH_TRAININGS_FULFILLED';
export const FETCH_TRAININGS_REJECTED = 'FETCH_TRAININGS_REJECTED';

// Training create
export const ADD_TRAINING = 'ADD_TRAINING';
export const ADD_TRAINING_FULFILLED = 'ADD_TRAINING_FULFILLED';
export const ADD_TRAINING_REJECTED = 'ADD_TRAINING_REJECTED';

// Training delete
export const DELETE_TRAINING = 'DELETE_TRAINING';
export const DELETE_TRAINING_FULFILLED = 'DELETE_TRAINING_FULFILLED';
export const DELETE_TRAINING_REJECTED = 'DELETE_TRAINING_REJECTED';


const TRAININGS_API_URL = REST_API_URL + 'trainings';

export const fetchTrainings = () => {
    const request = axios({
        method: 'get',
        url: TRAININGS_API_URL
    });

    return {
        type: FETCH_TRAININGS,
        payload: request
    };
};

export const addTraining = (training) => {
    const request = axios({
        method: 'post',
        url: TRAININGS_API_URL,
        data: {
            result: training.result,
            groupId: training.groupId
        }
    });

    return {
        type: ADD_TRAINING,
        payload: request
    };
};

export const deleteTraining = (id) => {
    const request = axios({
        method: 'delete',
        url: TRAININGS_API_URL + '/' + id
    });

    return {
        type: DELETE_TRAINING,
        payload: request
    };
};
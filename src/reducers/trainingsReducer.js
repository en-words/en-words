import { FETCH_TRAININGS_PENDING, FETCH_TRAININGS_FULFILLED, FETCH_TRAININGS_REJECTED,
         ADD_TRAINING_FULFILLED, ADD_TRAINING_REJECTED,
         DELETE_TRAINING_FULFILLED, DELETE_TRAINING_REJECTED } from '../actions/trainingsAction';

const initialState = {
    trainingList: {
        trainings: [],
        error: null,
        loading: false
    },
};

export default function(state = initialState, action){

    switch(action.type) {

        // Fetch training actions
        case FETCH_TRAININGS_PENDING:
            return {
                ...state,
                trainingList: {
                    trainings: [],
                    error: null,
                    loading: true
                }
            };
        case FETCH_TRAININGS_FULFILLED:
            return {
                ...state,
                trainingList: {
                    trainings: action.payload.data,
                    error: null,
                    loading: false
                }
            };
        case FETCH_TRAININGS_REJECTED: {
            return {
                ...state,
                trainingList: {
                    trainings: [],
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };
        }

        // Add training actions
        case ADD_TRAINING_FULFILLED:
            return {
                ...state,
                trainingList: {
                    trainings: state.trainingList.trainings.concat(action.payload.data),
                    error: null,
                    loading: false
                }
            };
        case ADD_TRAINING_REJECTED:
            return {
                ...state,
                trainingList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        // Delete training actions
        case DELETE_TRAINING_FULFILLED:
            return {
                ...state,
                trainingList: {
                    trainings: state.trainingList.trainings.filter(training => training.trainingId !== action.payload.id),
                    error: null,
                    loading: false
                }
            };
        case DELETE_TRAINING_REJECTED:
            return {
                ...state,
                trainingList: {
                    error: action.payload || {message: action.payload.message},
                    loading: false
                }
            };

        default:
            return state;
    }
}
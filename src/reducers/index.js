import { combineReducers } from 'redux';

import groups from './groupsReducer';
import words from './wordsReducer';
import trainings from './trainingsReducer';

export default combineReducers({
    groups,
    words,
    trainings
});
import { combineReducers } from 'redux';

import groups from '../groups/reducers/groupsReducer';
import words from '../words/reducers/wordsReducer';
import trainings from './trainingsReducer';

export default combineReducers({
    groupsData: groups,
    wordsData: words,
    trainings
});

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import groups from '../groups/reducers/groupsReducer';
import words from './wordsReducer';
import trainings from './trainingsReducer';

export default combineReducers({
    groupsData: groups,
    words,
    trainings,
    form: formReducer
});

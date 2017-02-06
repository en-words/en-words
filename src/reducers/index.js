import { combineReducers } from 'redux';

import groups from './groupsReducer';
import words from './wordsReducer';

export default combineReducers({
    groups,
    words
});
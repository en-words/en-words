import { combineReducers } from 'redux';

import {groups} from './groupsReducer';
import {selectedGroup} from './selectedGroupReducer';
import {words} from './wordsReducer';

export default combineReducers({
    groups,
    selectedGroup,
    words
});
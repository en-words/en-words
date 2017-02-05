import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';

import groups from './groupsReducer';
import words from './wordsReducer';

const initialGroup = {
    groupId: -1,
    groupName: ''
};

export default combineReducers({
    groups,
    group: modelReducer('group', initialGroup),
    groupForm: formReducer('group', initialGroup),

    words
});
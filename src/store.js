import { applyMiddleware, combineReducers, createStore} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import groups from './groups/reducers/groupsReducer';
import words from './words/reducers/wordsReducer';
import dashboard from './dashboard/reducers/dashboardReducer';

const reducer = combineReducers({
    groupsData: groups,
    wordsData: words,
    dashboardData: dashboard
});

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);


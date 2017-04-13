import { applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import groups from './groups/reducers/groupsReducer';
import words from './words/reducers/wordsReducer';
import dashboard from './dashboard/reducers/dashboardReducer';
import {BUILD_TYPE} from './common/AppSettings';

const reducer = combineReducers({
    groupsData: groups,
    wordsData: words,
    dashboardData: dashboard
});

let middleware;

if (BUILD_TYPE !== 'prod') {
    middleware = applyMiddleware(promise(), thunk, logger());
} else {
    middleware = applyMiddleware(promise(), thunk);
}

export default createStore(reducer, middleware);


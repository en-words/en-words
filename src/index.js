import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './app/App';
import Dashboard from './dashboard/Dashboard';
import Words from './words/Words';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/words' component={Words} />
        </Route>
    </Router>,
    document.getElementById('root')
);

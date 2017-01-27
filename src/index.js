import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from './store';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Words from './components/words/Words';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Dashboard} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/words' component={Words} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

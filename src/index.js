import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from './store';

import App from './components/app/App';
import Dashboard from './components/dashboard/Dashboard';
import Words from './containers/WordsContainer';

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

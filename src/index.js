import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import store from './store';

import App from './app/components/App';
import Dashboard from './dashboard/components/Dashboard';
import Words from './words/containers/WordListContainer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Dashboard} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/words' component={Words} />
                </Route>
            </Router>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);

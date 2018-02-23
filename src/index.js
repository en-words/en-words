import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import store from './store';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

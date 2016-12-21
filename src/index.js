import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'
import configureStore from './store';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
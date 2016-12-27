import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

import App from './components/Home/App.jsx'
import configureStore from './store';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
        </Router>
    </Provider>,

    document.getElementById('app')
)
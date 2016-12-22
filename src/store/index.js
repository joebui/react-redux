import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

import todoApp from '../reducers/reducer'

const createAppStore = compose(
	applyMiddleware(thunkMiddleware)
)(createStore);

export default function configureStore() {
	const store = createAppStore(todoApp);
	return store;
};
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '@app/reducers';

const middleware = [createLogger()];
const store = createStore(reducers, applyMiddleware(thunk, ...middleware));

export default store;

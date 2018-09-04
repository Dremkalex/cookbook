import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from './middlewares/preparingStatus';

const enhancer = composeWithDevTools(applyMiddleware(thunk, throttle));

const store = createStore(rootReducer, enhancer);

export default store;

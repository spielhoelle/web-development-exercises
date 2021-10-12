import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// show them it does not work this way and then go to instructions Redux DevTools
// 
// const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

const store = createStore(
    rootReducer, 
    initialState, 
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;





import { createStore } from 'redux';
import rootReducer from './reducers'; // We will create this file in the next step

const store = createStore(
    rootReducer,
    // Optional: add Redux DevTools Extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

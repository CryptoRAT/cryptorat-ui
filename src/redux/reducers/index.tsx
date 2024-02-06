import { combineReducers } from 'redux';
import itemsReducer from './authReducer';

const rootReducer = combineReducers({
    items: itemsReducer,
});

export default rootReducer;

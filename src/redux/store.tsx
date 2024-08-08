import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

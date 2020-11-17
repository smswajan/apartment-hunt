import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createForms } from 'react-redux-form';
import { Apartments } from './apartments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            apartments: Apartments,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
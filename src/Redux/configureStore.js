import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Apartments } from './apartments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const composeEnhancers = composeWithDevTools({});

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            apartments: Apartments,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
// export const ConfigureStore = () => {
//     const store = createStore(
//         combineReducers({
//             apartments: Apartments,
//         }),
//         composeEnhancers(
//             applyMiddleware(thunk, logger))
//     );

//     return store;
// }
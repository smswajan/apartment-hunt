import * as ActionTypes from './ActionTypes';

export const Apartments = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.APARTMENTS_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] };

        case ActionTypes.APARTMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, dishes: [] };

        default:
            return state;
    }
}
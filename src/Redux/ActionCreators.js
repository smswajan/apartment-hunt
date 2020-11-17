import * as ActionTypes from './ActionTypes';



export const fetchApartments = () => (dispatch) => {
    dispatch(apartmentsLoading(true));
    return fetch('http://localhost:4000/apartments', { method: 'GET' })
        .then(response => response.json())
        .then(result => {
            return result
        })
        .then(apartments => dispatch(addApartments(apartments)))
        .catch(error => dispatch(apartmentsFailed(error.message)));
}
fetch('http://localhost:4000/apartments', { method: 'GET' })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        return result
    })

export const apartmentsLoading = () => ({
    type: ActionTypes.APARTMENTS_LOADING
});

export const apartmentsFailed = (errmess) => ({
    type: ActionTypes.APARTMENTS_FAILED,
    payload: errmess
});

export const addApartments = (apartments) => ({
    type: ActionTypes.ADD_APARTMENTS,
    payload: apartments
});

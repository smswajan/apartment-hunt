import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';



export const fetchApartments = () => (dispatch) => {
    dispatch(apartmentsLoading(true));


    return firestore.collection('dishes').get()
        .then(snapshot => {
            let dishes = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                dishes.push({ _id, ...data });
            });
            return dishes;
        })
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const apartmentsLoading = () => ({
    type: ActionTypes.APARTMENTS_LOADING
});

export const apartmentsFailed = (errmess) => ({
    type: ActionTypes.APARTMENTS_FAILED,
    payload: errmess
});

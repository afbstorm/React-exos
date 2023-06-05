import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/increment-reducers';
import requestAgeReducer from './reducers/requestAge-reducers';

// Création du store avec redux-toolkit (configureStore) :
const store = configureStore({
    reducer: {
        // On donne un nom à chaque reducer pour les retrouver 
        // avec useSelector dans les composants
        counter: counterReducer,
        age: requestAgeReducer
    }
});

export default store;
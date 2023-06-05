import { createReducer } from "@reduxjs/toolkit";
import { incrementAction, resetAction } from "../actions/increment-actions";

const initialState = {
    count: 0
};

// Création d'un reducer avec redux-toolkit (createReducer) :
// 1er paramètre : l'état initial
// 2ème paramètre : un builder qui permet de créer des cas (addCase) 
// ou des cas par défaut (addDefaultCase) 
// ou de gérer les erreurs (addErrorCase)
const counterReducer = createReducer(initialState, (builder) => {
    builder
    // addCase prend en paramètre une action et une fonction qui 
    // prend en paramètre l'état et l'action et qui retourne 
    // un nouvel état
        .addCase(incrementAction, (state, action) => {
            return {
                // On retourne un nouvel état en utilisant 
                // l'opérateur spread
                ...state,
                // On modifie la propriété counter de l'état 
                // en lui ajoutant la valeur de l'action
                count: state.count + action.payload
            }
        })
        .addCase(resetAction, (state) => {
            return {
                ...state,
                count: 0
            }
        })
});

export default counterReducer;
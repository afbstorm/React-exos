import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    age: null,
};

const requestAgeReducer = createReducer(initialState, (builder) => {
    builder 
    // Ajoute l'action "age/request/fulfilled" à l'object builder
            .addCase("age/request/fulfilled", (state, action) => {
                return {
                    ...state,
                    age: action.payload.age,
                }
            })
            .addCase("age/request/rejected", (state) => {
                return {
                    ...state,
                    age: null,
                }
            })
});

export default requestAgeReducer;
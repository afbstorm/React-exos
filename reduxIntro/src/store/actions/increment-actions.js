import { createAction } from "@reduxjs/toolkit";

// Création d'une action avec redux-toolkit (createAction) : 
export const incrementAction = createAction('counter/increment')
export const resetAction = createAction('counter/reset')

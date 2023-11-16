import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "../FeaturesRedux/burgerMenuSlice/burgerMenu_slice";
import populationEvaluationReducer from "../FeaturesRedux/panelPopulationEvaluationSlice/populationEvaluation_slice";

//Creating store for redux
export const store = configureStore({
    reducer: {
        burgerMenu: burgerMenuReducer,
        populationEvaluationQuestions: populationEvaluationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
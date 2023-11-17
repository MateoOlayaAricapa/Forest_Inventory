import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "../FeaturesRedux/burgerMenuSlice/burgerMenu_slice";
import populationEvaluationReducer from "../FeaturesRedux/panelPopulationEvaluationSlice/populationEvaluation_slice";
import modalReducer from "../FeaturesRedux/ModalSlice/modal_slice";
import saveQueryReducer from "../FeaturesRedux/ModalSlice/saveQuery_slice";
import informationQueryReducer from "../FeaturesRedux/ModalSlice/informationQuery_slice";

//Creating store for redux
export const store = configureStore({
    reducer: {
        burgerMenu: burgerMenuReducer,
        populationEvaluationQuestions: populationEvaluationReducer,
        Modals: modalReducer,
        saveQuery: saveQueryReducer,
        dataInformationQuery: informationQueryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
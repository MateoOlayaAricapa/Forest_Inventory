import { createSlice } from "@reduxjs/toolkit";

type typeInitialState = {
    isSelectQuestion: boolean[];
}

const initialState: typeInitialState = {
    isSelectQuestion: [true, false, false, false, false]
}

export const PopulationEvaluationSlice = createSlice({
    name: "populationEvaluationSlice",
    initialState,
    reducers: {
        openPanelFirstQuestion: (state) => {
            state.isSelectQuestion = [true, false];
        },
        openPanelSecondQuestion: (state) => {
            state.isSelectQuestion = [false, true];
        }
    }
});

export const {
    openPanelFirstQuestion,
    openPanelSecondQuestion
} = PopulationEvaluationSlice.actions;
export default PopulationEvaluationSlice.reducer;
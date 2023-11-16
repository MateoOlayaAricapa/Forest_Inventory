import { createSlice } from "@reduxjs/toolkit";

type typeInitialState = {
    isSelectPanel: boolean[];
}

const initialState: typeInitialState = {
    isSelectPanel: [true, false, false, false, false]
}

export const BurgerMenuSlice = createSlice({
    name: "burgerMenuSlice",
    initialState,
    reducers: {
        openPopulationOptionPanel: (state) => {
            state.isSelectPanel = [true, false, false, false];
        },
        openAnotherOptionPanel: (state) => {
            state.isSelectPanel = [false, true, false, false]
        } 
    }
});

export const {
    openPopulationOptionPanel,
    openAnotherOptionPanel
} = BurgerMenuSlice.actions;
export default BurgerMenuSlice.reducer;
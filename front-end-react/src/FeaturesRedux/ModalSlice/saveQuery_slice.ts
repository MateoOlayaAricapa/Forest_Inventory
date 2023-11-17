import { createSlice } from "@reduxjs/toolkit";

type typeInitialState = {
    enpointSaveQuery: string;
}

const initialState: typeInitialState = {
    enpointSaveQuery: ""
}

export const SaveQuerySlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        changingValueEndPotin: (state, action) => {
            state.enpointSaveQuery = action.payload 
        }
    }
});

export const {
    changingValueEndPotin
} = SaveQuerySlice.actions;
export default SaveQuerySlice.reducer;
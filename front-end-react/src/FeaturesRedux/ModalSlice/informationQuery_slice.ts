import { createSlice } from "@reduxjs/toolkit";
import { typeDataQueries } from "../../TypeTypeScript/type";

type typeInitialState = {
    dataQuery: typeDataQueries
}

const initialState: typeInitialState = {
    dataQuery: {
        id_query: 0, 
        creator_username: "", 
        name_query: "",
        description: "",
        createat: new Date(),
        endpoint: ""
    }
}

export const InformationQuerySlice = createSlice({
    name: "informationQuerySlice",
    initialState,
    reducers: {
        setChangingValueData: (state, action) => {
            state.dataQuery = action.payload
        }
    }
});

export const {
    setChangingValueData
} = InformationQuerySlice.actions;
export default InformationQuerySlice.reducer;
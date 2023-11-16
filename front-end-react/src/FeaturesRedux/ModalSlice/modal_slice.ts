import { createSlice } from "@reduxjs/toolkit";

type typeInitialState = {
    isOpenModal: boolean[];
}

const initialState: typeInitialState = {
    isOpenModal: [false, false, false]
}

export const ModalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        openSaveQueryModal: (state) => {
            state.isOpenModal = [true, true, false];
        },
        openInformationQueryModal: (state) => {
            state.isOpenModal = [true, false, true]
        },
        closeModals: (state) => {
            state.isOpenModal = [false, false, false]
        } 
    }
});

export const {
    openSaveQueryModal,
    openInformationQueryModal,
    closeModals
} = ModalSlice.actions;
export default ModalSlice.reducer;
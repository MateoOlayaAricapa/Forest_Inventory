import { useDispatch } from "react-redux";
import { closeModals } from "../../../FeaturesRedux/ModalSlice/modal_slice";

//Functión that initial states of the component
export const InitialStateInformationQueryModal = () => {

    const list = [1, 2, 3, 4];

    //Redux
    const dispatch = useDispatch();

    //Returnin values
    return {
        list,
        dispatch
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = (
    refButton: string,
    dispatch: Function
) => {

    switch(refButton){

        case "close":
            dispatch(closeModals());
            break;

    }//End switch

}
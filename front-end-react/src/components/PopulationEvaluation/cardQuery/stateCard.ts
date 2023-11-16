import { useDispatch } from "react-redux";
import { 
    openInformationQueryModal 
} from "../../../FeaturesRedux/ModalSlice/modal_slice";

//Functión that initial states of the component
export const InitialStateCard = () => {

    //Redux
    const dispatch = useDispatch();

    //Returning values
    return {
        dispatch
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButtonOption = (
    refButton: string,
    dispatch: Function
) => {

    switch(refButton){

        case "open":
            dispatch(openInformationQueryModal());
            break;

        case "consult":
            break

    }//End switch

}
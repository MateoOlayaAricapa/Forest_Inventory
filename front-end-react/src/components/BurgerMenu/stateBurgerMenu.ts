import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";

//Redux
import { 
    openPopulationOptionPanel,
    openAnotherOptionPanel 
} from "../../FeaturesRedux/burgerMenuSlice/burgerMenu_slice";
import { closeModals } from "../../FeaturesRedux/ModalSlice/modal_slice"; 

//Importing content multimedia
import iconStates from "../../multimedia/States.png";
import iconTest from "../../multimedia/other.png";

//Functión that initial states of the component
export const InitialStateBurgerMenu = () => {

    const dataOptionsAnalitics = [
        {img: iconStates, name: "Population evaluation", ref: "population"},
        {img: iconTest, name: "Another", ref: "another"}
    ]

    const dataOptionsFeatures = [
        {img: iconTest, name: "Another", ref: "another"},
        {img: iconTest, name: "Another", ref: "another"}
    ]

    //Redux
    const dispatch = useDispatch();
    const navegation = useNavigate();

    //Return values
    return {
        dataOptionsAnalitics,
        dataOptionsFeatures,
        dispatch,
        navegation
    }

}

//Function that is executes when a burger menu button is pressed
export const HandleChangeButtonOption = (
    refButtonOption: string,
    dispatch: Function,
    navegation: Function
) => {

    switch(refButtonOption){
        case "population":
            dispatch(openPopulationOptionPanel());
            break;
        case "another":
            dispatch(openAnotherOptionPanel());
            break;
        case "logOut":
            dispatch(closeModals());
            navegation("/");
            break;
    }//End switch

}
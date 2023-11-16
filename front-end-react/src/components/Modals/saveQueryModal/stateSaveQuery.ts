import {useState, useContext} from "react";
import { typeDataNewQuery } from "../../../TypeTypeScript/type";
import { userNameContext } from "../../../contextAPI/context";

//Redux
import {useDispatch} from "react-redux";
import { closeModals } from "../../../FeaturesRedux/ModalSlice/modal_slice";

//Functión that initial states of the component
export const InitialStateSaveQueryModal = () => {

    //Getting username of context api
    const {userName} = useContext(userNameContext);

    //variable that represents new data query
    const [dataNewQuery, setDataNewQuery] = useState<typeDataNewQuery>({
        userName: userName,
        nameQuery: "",
        description: "",
        deleteat: false,
        endPoint: ""
    });

    //Redux
    const dispatch = useDispatch();

    //Returning values
    return{
        dataNewQuery,
        setDataNewQuery,
        dispatch
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = (
    refButton: string,
    dataNewQuery: typeDataNewQuery,
    dispatch: Function
) => {

    switch(refButton){
        case "save":
            console.log(dataNewQuery);
            break;
        case "cancel":
            dispatch(closeModals());
            break;
    }//end switch

}

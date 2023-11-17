import {Dispatch, SetStateAction} from "react";
import { useDispatch } from "react-redux";
import { 
    openInformationQueryModal 
} from "../../../FeaturesRedux/ModalSlice/modal_slice";
import { typeDataGraphics } from "../../../TypeTypeScript/type";
import { FetchButtonGetPost } from "../../../customHook/useFetch";

//Functión that initial states of the component
export const InitialStateCard = () => {

    //Redux
    const dispatch = useDispatch();

    //Importing function fetch get
    const {fetchDataGET} = FetchButtonGetPost();

    //Returning values
    return {
        dispatch,
        fetchDataGET
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButtonOption = async (
    refButton: string,
    dispatch: Function,
    setDataGraphics: Dispatch<SetStateAction<typeDataGraphics[]>>,
    fetchDataGET: Function,
    endPoint: string,
    setIsLoadingGraphics: Dispatch<SetStateAction<boolean>>
) => {

    switch(refButton){

        case "open":
            dispatch(openInformationQueryModal());
            break;

        case "consult":

            setIsLoadingGraphics(true);

            //Getting data of fetch GET
            const {dataResult} = await fetchDataGET(endPoint);

            if(dataResult.Messages === "not found"){

                setIsLoadingGraphics(false);
                alert("Not Found Data. Please, select other years");

            }else{
                setIsLoadingGraphics(false);
                setDataGraphics(dataResult);
            }//End condition

            break

    }//End switch

}
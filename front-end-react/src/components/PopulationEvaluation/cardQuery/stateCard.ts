import {Dispatch, SetStateAction} from "react";
import { useDispatch } from "react-redux";
import { 
    openInformationQueryModal 
} from "../../../FeaturesRedux/ModalSlice/modal_slice";
import { typeDataGraphics } from "../../../TypeTypeScript/type";
import { FetchButtonGetPost } from "../../../customHook/useFetch";
import { typeDataQueries } from "../../../TypeTypeScript/type";

//Redux
import { setChangingValueData } from "../../../FeaturesRedux/ModalSlice/informationQuery_slice";

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
    dataQuery: typeDataQueries,
    setIsLoadingGraphics: Dispatch<SetStateAction<boolean>>
) => {

    switch(refButton){

        case "open":

            //Passing data to be used in the information Query modal
            dispatch(setChangingValueData(dataQuery));
            dispatch(openInformationQueryModal());
            break;

        case "consult":

            setIsLoadingGraphics(true);

            //Getting data of fetch GET
            const {dataResult} = await fetchDataGET(dataQuery.endpoint);

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
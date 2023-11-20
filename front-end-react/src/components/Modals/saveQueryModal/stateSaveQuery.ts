import {useState, useContext} from "react";
import { typeDataNewQuery } from "../../../TypeTypeScript/type";
import { userNameContext } from "../../../contextAPI/context";
import { FetchButtonGetPost } from "../../../customHook/useFetch";
import { URI_BACKEND } from "../../../uriQueries/uri_queries";

//Redux
import {useDispatch} from "react-redux";
import { closeModals } from "../../../FeaturesRedux/ModalSlice/modal_slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../StoreRedux/store";

//Functión that initial states of the component
export const InitialStateSaveQueryModal = () => {

    //Getting username of context api
    const {userName} = useContext(userNameContext);

    //Data endpoint
    const valueEndPoint = useSelector((state: RootState) => state.saveQuery.enpointSaveQuery);

    console.log(valueEndPoint)
 
    //variable that represents new data query
    const [dataNewQuery, setDataNewQuery] = useState<typeDataNewQuery>({
        userName: userName,
        nameQuery: "",
        description: "",
        deleteat: false,
        endPoint: valueEndPoint
    });

    //Redux
    const dispatch = useDispatch();
    const {fetchDataPOST} = FetchButtonGetPost();

    //Returning values
    return{
        dataNewQuery,
        setDataNewQuery,
        dispatch,
        fetchDataPOST,
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = async(
    refButton: string,
    dataNewQuery: typeDataNewQuery,
    dispatch: Function,
    fetchDataPOST: Function,
) => {

    switch(refButton){
        case "save":

            //Getting results POST
            const {dataResults} = await fetchDataPOST(`http://${URI_BACKEND}/query/save`, dataNewQuery);

            if(dataResults.Messages === "saved data"){

                dispatch(closeModals());
                alert("Saved Data");

            }//End condition

            break;
        case "cancel":
            dispatch(closeModals());
            break;
    }//end switch

}

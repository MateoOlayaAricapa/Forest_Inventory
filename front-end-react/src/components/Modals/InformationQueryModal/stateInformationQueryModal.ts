import {useContext, Dispatch, SetStateAction} from "react";
import { useDispatch } from "react-redux";
import { closeModals } from "../../../FeaturesRedux/ModalSlice/modal_slice";
import { useFetchGET } from "../../../customHook/useFetch";
import { FetchButtonGetPost } from "../../../customHook/useFetch";
import { typeDataComments } from "../../../TypeTypeScript/type";

//Context API
import { userNameContext } from "../../../contextAPI/context";

//Redux
import {useSelector} from "react-redux";
import { RootState } from "../../../StoreRedux/store";
import { useState } from "react";

type typeDataNewComment = {
    id_query: number,
    username: string,
    content: string,
    deleteat: boolean
}

//Functión that initial states of the component
export const InitialStateInformationQueryModal = () => {

    //Query data
    const valueDataQuery = useSelector((state: RootState) => state.dataInformationQuery.dataQuery);

    //List that has all the data comments
    const [dataComments, setDataComments] = useState<typeDataComments[]>([]);
    const [isLoadingComments, setIsLoadingComments] = useState<boolean>(false);

    //Applying fetch to get all comments
    useFetchGET(`http://localhost:5000/comment/data/comments/${valueDataQuery.id_query}`, setIsLoadingComments, setDataComments);

    //Importing username of context api
    const {userName} = useContext(userNameContext);

    //Creating object to save a comment
    const [dataNewComment, setDataNewComment] = useState<typeDataNewComment>({
        id_query: valueDataQuery.id_query,
        username: userName,
        content: "",
        deleteat: false
    });
 
    //Importing funtion POST
    const {fetchDataPOST} = FetchButtonGetPost();

    //Redux
    const dispatch = useDispatch();

    //Returnin values
    return {
        dispatch,
        valueDataQuery,
        dataComments,
        setDataComments,
        isLoadingComments,
        fetchDataPOST,
        dataNewComment,
        setDataNewComment
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = async(
    refButton: string,
    dispatch: Function,
    fetchDataPOST: Function,
    dataNewComment: typeDataNewComment,
    setDataComments: Dispatch<SetStateAction<typeDataComments[]>>
) => {

    switch(refButton){

        case "close":
            dispatch(closeModals());
            break;
        case "postComment":

            //Verifying that the field is not empty
            if(dataNewComment.content !== ""){
                
                //Saving comment and getting results
                const {dataResults} = await fetchDataPOST("http://localhost:5000/comment/save", dataNewComment);

                if(dataResults.Messages === "saved data"){

                    //Organizing data
                    const data = {
                        id_comment: dataResults.id,
                        id_query: dataNewComment.id_query,
                        username: dataNewComment.username,
                        content: dataNewComment.content,
                        create_at: dataResults.date
                    }
                    
                    //Adding in comments list
                    setDataComments((prevData: typeDataComments[]) => {
                        
                        if (!Array.isArray(prevData)) {
                            return [];
                        }//End condition
                    
                        return [...prevData, data];
                    });

                }//end condition

            }else{

                alert("Please, write a comment");

            }//End condition
            break;

    }//End switch

}
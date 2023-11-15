import {useContext} from "react";
import { userNameContext } from "../../contextAPI/context";

//Functión that initial states of the component
export const InitialStateDashboardPages = () => {

    //Importing user name of context API
    const {userName} = useContext(userNameContext);

    //Returning values
    return {
        userName
    }

}
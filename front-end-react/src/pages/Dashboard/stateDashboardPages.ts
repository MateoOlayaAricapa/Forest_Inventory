import {useContext, useEffect} from "react";
import { userNameContext } from "../../contextAPI/context";
import {useSelector} from "react-redux";
import { RootState } from "../../StoreRedux/store";

//Functión that initial states of the component
export const InitialStateDashboardPages = () => {

    //Importing user name of context API
    const {userName, setUserName} = useContext(userNameContext);

    useEffect(() => {

        const storeUserName = localStorage.getItem("nameUser"); //Getting userName of localstorage

        //Condition that allows persistence of data such as the user's name
        if(userName === "" && storeUserName !== null){

            setUserName(storeUserName);
            
        }//End condition

    }, []);

    //Importing values for each menu option
    const valuesBurgerMenu = useSelector((state: RootState) => state.burgerMenu.isSelectPanel);

    //Returning values
    return {
        userName,
        valuesBurgerMenu
    }

}
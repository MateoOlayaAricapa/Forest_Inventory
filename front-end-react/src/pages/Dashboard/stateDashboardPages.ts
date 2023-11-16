import {useContext} from "react";
import { userNameContext } from "../../contextAPI/context";
import {useSelector} from "react-redux";
import { RootState } from "../../StoreRedux/store";

//Functión that initial states of the component
export const InitialStateDashboardPages = () => {

    //Importing user name of context API
    const {userName} = useContext(userNameContext);

    //Importing values for each menu option
    const valuesBurgerMenu = useSelector((state: RootState) => state.burgerMenu.isSelectPanel);

    //Returning values
    return {
        userName,
        valuesBurgerMenu
    }

}
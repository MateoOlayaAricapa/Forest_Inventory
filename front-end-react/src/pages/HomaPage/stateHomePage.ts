import { useState, Dispatch, SetStateAction, useContext } from "react";
import {useNavigate} from "react-router-dom";
import { 
    typeUserName 
} from "../../TypeTypeScript/type"; //Import types of typeScript
import { userNameContext } from "../../contextAPI/context";

//Functión that initial states of the component
export const InitialStateHomePage = () =>{

    //userName entered in the input
    const [userNameLogin, setUserNameLogin] = useState<typeUserName>("");

    //Variable that shows message of "please, enter a username"
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    //Importing setUsername of context API
    const {setUserName} = useContext(userNameContext);

    const navigate = useNavigate();

    //Return values
    return{
        userNameLogin,
        setUserNameLogin,
        errorMessage,
        setErrorMessage,
        setUserName,
        navigate
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = (
    userNameLogin: typeUserName,
    setUserNameContext:  Dispatch<SetStateAction<typeUserName>>,
    setErrorMessage: Dispatch<SetStateAction<boolean>>,
    navigate: Function
) => {

    if(userNameLogin === ""){

        setErrorMessage(true); //Show message

    }else{

        try {
            
            setUserNameContext(userNameLogin); //Updating userName in context API
            localStorage.setItem("nameUser", userNameLogin); //Saving data to the user's device
            setErrorMessage(false); //Hidden message
            navigate("/pages/dashboard"); //Changing pages
            
        } catch (error) {
            console.error(`Error localStorage: [${error}]`);
        }//En catch

    }//End condition

}
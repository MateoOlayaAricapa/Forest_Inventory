import {createContext, useState} from "react";

import { 
    typeUserName,
    typeContext,
    typeDataContextProvider
} from "../TypeTypeScript/type"; //Import types of typeScript

export const userNameContext = createContext<typeContext>({userName: "", setUserName: () => {}}); //Creating context

export const DataContextProvider: React.FC<typeDataContextProvider> = ({children}) => {

    const [userName, setUserName] = useState<typeUserName>("");

    return (
        <userNameContext.Provider value={{userName, setUserName}}>
            {children}
        </userNameContext.Provider>
    );
}
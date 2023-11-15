import { ReactNode, Dispatch, SetStateAction } from "react";

//type of context API userName
export type typeUserName = string;

//type of context API
export type typeContext = {
    userName: typeUserName,
    setUserName: Dispatch<SetStateAction<typeUserName>>
}

//type of context API children
export type typeDataContextProvider = {
    children: ReactNode;
};
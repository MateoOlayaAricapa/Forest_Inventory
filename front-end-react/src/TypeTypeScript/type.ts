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

export type typeSelectYears = {
    startYear: string,
    endYear: string
}

export interface typeBarGraphics {
    data: {
        state: string, 
        total_evaluations: number, 
        evaluations: string
    }[];
}
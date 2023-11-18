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

//selectYears type for input fields
export type typeSelectYears = {
    startYear: string,
    endYear: string
}

//type of data that the bar graph will receive (props)
export interface typeBarGraphics {
    data: {
        state: string, 
        total_evaluations: number, 
        evaluations: string
    }[];
}

//data type to create a new query
export type typeDataNewQuery = {
    userName: string,
    nameQuery: string,
    description: string,
    deleteat: false,
    endPoint: string
}

//data type for the query data that the query returns
export type typeDataQueries = {
    id_query: number, 
    creator_username: string, 
    name_query: string,
    description: string,
    createat: Date,
    endpoint: string
}

//type of data that the bar graph will receive
export type typeDataGraphics = {
    state: string, 
    total_evaluations: number, 
    evaluations: string
}

//types of data received by the card that shows the data of a query
export interface typeDataCard {
    dataQuery: {
        id_query: number, 
        creator_username: string, 
        name_query: string,
        description: string,
        createat: Date,
        endpoint: string
    },
    setDataGraphics: Dispatch<SetStateAction<typeDataGraphics[]>>,
    setIsLoadingGraphics: Dispatch<SetStateAction<boolean>>,
}

//data type for a comment data
export type typeDataComments = {
    id_comment: number,
    id_query: number,
    username: string,
    content: string,
    create_at: Date
}
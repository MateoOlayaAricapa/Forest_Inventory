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

export type typeDataNewQuery = {
    userName: string,
    nameQuery: string,
    description: string,
    deleteat: false,
    endPoint: string
}

export type typeDataQueries = {
    id_query: number, 
    creator_username: string, 
    name_query: string,
    description: string,
    createat: Date,
    endpoint: string
}

export type typeDataGraphics = {
    state: string, 
    total_evaluations: number, 
    evaluations: string
}

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

export type typeDataComments = {
    id_comment: number,
    id_query: number,
    username: string,
    content: string,
    create_at: Date
}
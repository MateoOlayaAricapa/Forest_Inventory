import {useState} from "react";
import { typeSelectYears } from "../../../TypeTypeScript/type";

//Functión that initial states of the component
export const InitialStatePanelFirstQuestion = () => {

    const [selectYears, setSelectYears] = useState<typeSelectYears>({
        startYear: "2008", endYear: "2019"
    })

    const dataTest = [
        {state: "Colombia", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Pereira", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Bogota", total_evaluations: 10, evaluations: "Ninguno"},
        {state: "Calio", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Medellín", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Cartagena", total_evaluations: 10, evaluations: "Ninguno"},
        {state: "Cundinamarca", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Huila", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Santa marta", total_evaluations: 10, evaluations: "Ninguno"},
        {state: "Barranquilla", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Pasto", total_evaluations: 6, evaluations: "Ninguno"},
        {state: "Neiva", total_evaluations: 10, evaluations: "Ninguno"}
    ]

    const listYears = [
        {value: "2008", label: "2008"},
        {value: "2009", label: "2009"},
        {value: "2010", label: "2010"},
        {value: "2011", label: "2011"}
    ];

    return {
        listYears,
        selectYears,
        setSelectYears,
        dataTest
    }
    
}

//Function that is executed when the button is pressed
export const HandleChangeButton = (
    refButton: string,
    selectYears: typeSelectYears
) => {
    console.log(selectYears)
}
import { useState } from "react"

//Functión that initial states of the component
export const InitialStatePanelPopulationEvaluation = () => {

    //Status indicating button selected
    const [buttonSelect, setButtonSelect] = useState<number>(0);

    //data of each question button
    const dataQuestions = [
        {name: "Question 1", ref: "question1"},
        {name: "Question 2", ref: "question2"}
    ]

    //Returning values
    return {
        buttonSelect,
        setButtonSelect,
        dataQuestions
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = (
    refButton: string
) =>{

}
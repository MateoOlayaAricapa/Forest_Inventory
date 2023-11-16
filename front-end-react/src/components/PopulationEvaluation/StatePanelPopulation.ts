import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "../../StoreRedux/store";
import { 
    openPanelFirstQuestion,
    openPanelSecondQuestion 
} from "../../FeaturesRedux/panelPopulationEvaluationSlice/populationEvaluation_slice";

//Functión that initial states of the component
export const InitialStatePanelPopulationEvaluation = () => {

    //Status indicating button selected
    const [buttonSelect, setButtonSelect] = useState<number>(0);

    //Importing values for each panel question
    const valuesPanelQuestion = useSelector(
        (state: RootState) => state.populationEvaluationQuestions.isSelectQuestion
    );

    const dispatch = useDispatch();

    //data of each question button
    const dataQuestions = [
        {name: "Question 1", ref: "question1"},
        {name: "Question 2", ref: "question2"}
    ]

    //Returning values
    return {
        buttonSelect,
        setButtonSelect,
        dataQuestions,
        valuesPanelQuestion,
        dispatch
    }

}

//Function that is executed when the button is pressed
export const HandleChangeButton = (
    refButton: string,
    dispatch: Function
) =>{

    switch(refButton) {
        case "question1":
            dispatch(openPanelFirstQuestion());
            break;
        case "question2":
            dispatch(openPanelSecondQuestion());
            break;
        default:
          
    }//end switch

}
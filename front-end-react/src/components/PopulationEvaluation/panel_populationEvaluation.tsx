import "./_panelPopulationEvaluation.scss"; //Importing styles
import { 
    InitialStatePanelPopulationEvaluation,
    HandleChangeButton
} from "./StatePanelPopulation";

//Importing components
import PanelFirsQuestion from "./PanelfirstQuestion/panel_firstQuestion";
import SaveQueryModal from "../Modals/saveQueryModal/saveQuery_moda";
import InformationQueryModal from "../Modals/InformationQueryModal/information_queryModal";

//Component panel population evaluation
function PanelPopulationEvaluation(){

    //Importing states and question
    const {
        buttonSelect,
        setButtonSelect,
        dataQuestions,
        valuesPanelQuestion,
        dispatch,
        valuesModals
    } = InitialStatePanelPopulationEvaluation();

    return (<div className="panelPopulationEvaluation">

        <div className="panelPopulationEvaluation__information">
            <h1>Population evaluation in the <span>Forest Inventory</span></h1>
            <p>
                This data table describes the evaluation area, 
                which generally refers to a specific geographic 
                region, and in most cases, this area is a state. 
                Its primary purpose is to maintain information 
                related to assessments conducted in these geographic areas, 
                which may include forest inventory data, population estimates, 
                and other details related to forest resource management.
            </p>
        </div>

        <div className="panelPopulationEvaluation__questionsQueries">

            <ul>
                {
                dataQuestions.map((data, i) => 
                    <li 
                    key={i} 
                    style={{backgroundColor: buttonSelect === i ? "#00A05F" : "transparent"}}
                    onClick={() => {setButtonSelect(i); HandleChangeButton(data.ref, dispatch)}}
                    >
                        {data.name}
                    </li>)
                }
            </ul>

        </div>

        <div className="panelPopulationEvaluation__panelsQuestions">
            {valuesPanelQuestion[0] && <PanelFirsQuestion/>}
        </div>
        
        {valuesModals[0] && (
        
            <div className="panelPopulationEvaluation__modals">
                {valuesModals[1] && <SaveQueryModal/>}
                {valuesModals[2] && <InformationQueryModal/>}
            </div>

        )}

    </div>);
}//End component

export default PanelPopulationEvaluation;
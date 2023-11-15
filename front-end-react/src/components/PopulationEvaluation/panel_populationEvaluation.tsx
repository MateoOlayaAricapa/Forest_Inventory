import "./_panelPopulationEvaluation.scss"; //Importing styles
import { 
    InitialStatePanelPopulationEvaluation,
    HandleChangeButton
} from "./StatePanelPopulation";

//Importing components
import PanelFirsQuestion from "./PanelfirstQuestion/panel_firstQuestion";

//Component panel population evaluation
function PanelPopulationEvaluation(){

    //Importing states and question
    const {
        buttonSelect,
        setButtonSelect,
        dataQuestions,
    } = InitialStatePanelPopulationEvaluation();

    return (<div className="panelPopulationEvaluation">

        <div className="panelPopulationEvaluation__information">
            <h1>Population evaluation in the <span>Forest Inventory</span></h1>
            <p>
                Is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type 
                specimen book. It has survived
            </p>
        </div>

        <div className="panelPopulationEvaluation__questionsQueries">

            <ul>
                {
                dataQuestions.map((data, i) => 
                    <li 
                    key={i} 
                    style={{backgroundColor: buttonSelect === i ? "#F0F0F0" : "transparent"}}
                    onClick={() => {setButtonSelect(i); HandleChangeButton(data.ref)}}
                    >
                        {data.name}
                    </li>)
                }
            </ul>

        </div>

        <div className="panelPopulationEvaluation__panelsQuestions">
            <PanelFirsQuestion/>
        </div>

    </div>);
}//End component

export default PanelPopulationEvaluation;
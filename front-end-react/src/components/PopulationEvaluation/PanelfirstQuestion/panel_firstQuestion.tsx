import "./_panelFirstQuestion.scss"; //Importing styles
import { 
    InitialStatePanelFirstQuestion,
    HandleChangeButton 
} from "./StatePanelFirstQuestion";

//Importing component 
import Select from "react-select"; 
import BarGraphics from "./graphicD3";
import Card from "../cardQuery/card";

function PanelFirsQuestion(){

    //Importing state and data
    const {
        listYears,
        selectYears,
        setSelectYears,
        dispatch,
        dataQueries,
        isLoading,
        fetchDataGET,
        dataGraphics,
        setDataGraphics,
        isLoadingGraphic,
        setIsLoadingGraphics
    } = InitialStatePanelFirstQuestion();

    return (<div className="panelFirstQuestion">

        <div className="panelFirstQuestion__visualQueryBuilder">

            <h1>
                Which states underwent an area evaluation process 
                between two time periods (years)?
            </h1>

            <div className="panelFirstQuestion__visualQueryBuilder__inputsButtons">

                <h2>Start year</h2>
                <Select
                    options={listYears}
                    defaultValue={listYears[0]}
                    onChange={(selectOption) => {

                        if(selectOption){
                            setSelectYears({...selectYears, startYear: selectOption.value})
                        }//end condition
                        
                    }}
                    styles={{
                        control: (styles) => {
                            return {
                                ...styles,
                                fontFamily: "Poppins",
                                fontSize: "0.938em",
                                fontWeight: "500",
                            }
                        },
                        option: (styles, {isSelected, isFocused}) => {
                            return {
                                ...styles,
                                fontFamily: "Poppins",
                                fontSize: "0.938em",
                                fontWeight: "500",
                                backgroundColor: isSelected ? "#00502F" : isFocused ? "" : styles.backgroundColor,
                                ":hover": {
                                    backgroundColor: "#00A05F",
                                },
                            }
                        }
                    }}
                />
                <h2>End year</h2>
                <Select
                    options={listYears}
                    defaultValue={listYears[3]}
                    onChange={(selectOption) => {

                        if(selectOption){
                            setSelectYears({...selectYears, endYear: selectOption.value})
                        }//end condition
                        
                    }}
                    styles={{
                        control: (styles) => {
                            return {
                                ...styles,
                                fontFamily: "Poppins",
                                fontSize: "0.938em",
                                fontWeight: "500",
                            }
                        },
                        option: (styles, {isSelected, isFocused}) => {
                            return {
                                ...styles,
                                fontFamily: "Poppins",
                                fontSize: "0.938em",
                                fontWeight: "500",
                                backgroundColor: isSelected ? "#00502F" : isFocused ? "" : styles.backgroundColor,
                                ":hover": {
                                    backgroundColor: "#00A05F",
                                },
                            }
                        }
                    }}
                />
                <button 
                onClick={() => HandleChangeButton("consult", selectYears, dispatch, fetchDataGET, setDataGraphics, setIsLoadingGraphics)}>
                    Consult
                </button>
                <button 
                onClick={() => HandleChangeButton("save", selectYears, dispatch, fetchDataGET, setDataGraphics, setIsLoadingGraphics)}>
                    Save Query
                </button>

            </div>

            <div className="panelFirstQuestion__visualQueryBuilder__graphics">
                <h4 style={{display: isLoadingGraphic ? "inline" : "none"}}>Loading...</h4>
                <BarGraphics data={dataGraphics}/>
            </div>

            <div className="panelFirstQuestion__visualQueryBuilder__explanationData">
                <p>
                    Is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a 
                    type specimen book. It has survived
                </p>
            </div>

        </div>

        <div className="panelFirstQuestion__tableQueries">

            <h1>Queries saved by other users</h1>

            <div className="panelFirstQuestion__tableQueries__header">
                <h2>Username</h2>
                <h2>Query Name</h2>
                <h2>Description</h2>
                <h2>Options</h2>
            </div>

            <div className="panelFirstQuestion__tableQueries__cards">
                {
                    isLoading 
                    ? dataQueries.map((data, i) =>  <Card key={i} dataQuery={data} setDataGraphics={setDataGraphics} setIsLoadingGraphics={setIsLoadingGraphics}/>) 
                    : <h1>Sin consultas guardadas</h1>
                }
            </div>

        </div>

    </div>);
}//End component

export default PanelFirsQuestion;
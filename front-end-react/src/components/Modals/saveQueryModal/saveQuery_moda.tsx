import "./_saveQueryModal.scss"; //Importing styles
import { 
    InitialStateSaveQueryModal,
    HandleChangeButton 
} from "./stateSaveQuery";

//importing content multimedia
import iconSave from "../../../multimedia/save.png";

//Component save query modal
function SaveQueryModal(){

    //Importing states and data
    const {
        dataNewQuery,
        setDataNewQuery,
        dispatch
    } = InitialStateSaveQueryModal();

    return (<div className="saveQueryModal">

        <div className="saveQueryModal__titleImage">

            <div className="saveQueryModal__titleImage__image">
                <img src={iconSave} alt="" />
            </div>

            <div className="saveQueryModal__titleImage__title">
                <h1>Save Query</h1>
                <p>Save your query for others to use</p>
            </div>

        </div>

        <div className="saveQueryModal__divider"/>

        <div className="saveQueryModal__inputs">

            <div className="saveQueryModal__inputs__queryName">

                <h1>Query name</h1>
                <div className="saveQueryModal__inputs__queryName__container">
                    <input type="text" onChange={(e) => setDataNewQuery({...dataNewQuery, nameQuery: e.target.value})}/>
                </div>

            </div>

            <div className="saveQueryModal__inputs__description">

                <h1>Description</h1>
                <div className="saveQueryModal__inputs__description__container">
                    <textarea 
                    name="" 
                    onChange={(e) => setDataNewQuery({...dataNewQuery, description: e.target.value})}/>
                </div>

            </div>

        </div>

        <div className="saveQueryModal__divider"/>

        <div className="saveQueryModal__buttons">
            <button onClick={() => HandleChangeButton("cancel", dataNewQuery, dispatch)}>
                Cancel
            </button>
            <button onClick={() => HandleChangeButton("save", dataNewQuery, dispatch)}>
                Save
            </button>
        </div>

    </div>);
}//End component

export default SaveQueryModal;
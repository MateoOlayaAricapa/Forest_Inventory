import "./_card.scss"; //Importing styles
import { 
    InitialStateCard,
    HandleChangeButtonOption 
} from "./stateCard";
import { typeDataCard } from "../../../TypeTypeScript/type";

//Importing content multimedia
import iconPhotoTest from "../../../multimedia/Photo.png";
import iconOpen from "../../../multimedia/open.png";

//Component card
function Card({dataQuery, setDataGraphics, setIsLoadingGraphics}: typeDataCard){

    //Importing states and data
    const {
        dispatch,
        fetchDataGET
    } = InitialStateCard();

    return (<div className="card">

        <div className="card__username">
            <img src={iconPhotoTest} alt="" />
            <h1>{dataQuery.creator_username}</h1>
        </div>

        <div className="card__queryName">
            <h1>{dataQuery.name_query}</h1>
        </div>

        <div className="card__description">
            <p>
                {dataQuery.description}
            </p>
        </div>

        <div className="card__buttonsOptions">
            <button 
            className="card__buttonsOptions__open"
            onClick={() => HandleChangeButtonOption("open", dispatch, setDataGraphics, fetchDataGET, dataQuery, setIsLoadingGraphics)}>
                <img src={iconOpen} alt="" />
            </button>

            <button 
            className="card__buttonsOptions__consult"
            onClick={() => HandleChangeButtonOption("consult", dispatch, setDataGraphics, fetchDataGET, dataQuery, setIsLoadingGraphics)}>
                Consult
            </button>
        </div>

    </div>);
}//end component

export default Card;
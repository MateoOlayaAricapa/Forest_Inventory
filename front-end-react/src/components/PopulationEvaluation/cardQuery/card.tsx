import "./_card.scss"; //Importing styles
import { 
    InitialStateCard,
    HandleChangeButtonOption 
} from "./stateCard";

//Importing content multimedia
import iconPhotoTest from "../../../multimedia/Photo.png";
import iconOpen from "../../../multimedia/open.png";

function Card(){

    //Importing states and data
    const {
        dispatch
    } = InitialStateCard();

    return (<div className="card">

        <div className="card__username">
            <img src={iconPhotoTest} alt="" />
            <h1>Mateo Olaya</h1>
        </div>

        <div className="card__queryName">
            <h1>States for 2019 and 2018</h1>
        </div>

        <div className="card__description">
            <p>
                Is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever 
                since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to 
                make a type specimen book. It has survived
            </p>
        </div>

        <div className="card__buttonsOptions">
            <button 
            className="card__buttonsOptions__open"
            onClick={() => HandleChangeButtonOption("open", dispatch)}>
                <img src={iconOpen} alt="" />
            </button>

            <button 
            className="card__buttonsOptions__consult"
            onClick={() => HandleChangeButtonOption("consult", dispatch)}>
                Consult
            </button>
        </div>

    </div>);
}//end component

export default Card;
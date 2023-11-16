import "./_informationQueryModal.scss"; //Importing styles
import { 
    InitialStateInformationQueryModal,
    HandleChangeButton 
} from "./stateInformationQueryModal";

//Importing content multimedia
import iconInformation from "../../../multimedia/information.png";

function InformationQueryModal(){

    //Importing states and data
    const {
        list,
        dispatch
    } = InitialStateInformationQueryModal();

    return (<div className="informationQueryModal">

        <div className="informationQueryModal__title">

            <div className="informationQueryModal__title__image">
                <img src={iconInformation} alt="" />
            </div>

            <div className="informationQueryModal__title__information">
                <h1>States for 2019 to 2020</h1>
                <p><span>Creator: </span>Mateo Olaya Aricapa</p>
            </div>

        </div>

        <div className="informationQueryModal__description">
            
            <h1>Description</h1>
            <p>
                is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen 
                book. It has survived is simply dummy text of 
                the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled 
                it to make a type specimen book. It has survived
            </p>
            
        </div>
 
        <div className="informationQueryModal__sectionComments">

            <h1>Comments</h1>

            <div className="informationQueryModal__sectionComments__comments">
            
                {list.map((data, i) => 

                    <div key={i} className="informationQueryModal__sectionComments__comments__container">
                    
                        <div className="informationQueryModal__sectionComments__comments__container__title">
                            <h1>Camilo Sandoval Quintero</h1>
                            <h2>09/11/2023</h2>
                        </div>

                        <div className="informationQueryModal__sectionComments__comments__container__content">
                            <p>
                                is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since 
                                the 1500s, when an unknown printer took a 
                                galley of type and scrambled it to make a type 
                                specimen book.
                            </p>
                        </div>

                    </div>

                )}

            </div>

        </div>

        <div className="informationQueryModal__inputComment">

            <div className="informationQueryModal__inputComment__textarea">
                <textarea/>
            </div>

            <button>
                Post comment
            </button>

        </div>

        <div className="informationQueryModal__button">
            <button onClick={() => HandleChangeButton("close", dispatch)}>
                Close
            </button>
        </div>

    </div>);
}//End component

export default InformationQueryModal;
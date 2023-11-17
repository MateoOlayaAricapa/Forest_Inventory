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
        dispatch,
        valueDataQuery,
        dataComments,
        setDataComments,
        isLoadingComments,
        fetchDataPOST,
        dataNewComment,
        setDataNewComment
    } = InitialStateInformationQueryModal();

    return (<div className="informationQueryModal">

        <div className="informationQueryModal__title">

            <div className="informationQueryModal__title__image">
                <img src={iconInformation} alt="" />
            </div>

            <div className="informationQueryModal__title__information">
                <h1>{valueDataQuery.name_query}</h1>
                <p><span>Creator: </span>{valueDataQuery.creator_username}</p>
            </div>

        </div>

        <div className="informationQueryModal__description">
            
            <h1>Description</h1>
            <p>
                {valueDataQuery.description}
            </p>
            
        </div>
 
        <div className="informationQueryModal__sectionComments">

            <h1>Comments {isLoadingComments && dataComments.length > 0 ? `(${dataComments.length})` : "(0)"}</h1>

            <div className="informationQueryModal__sectionComments__comments">
            
                {isLoadingComments && dataComments.length > 0 ? dataComments.map((data, i) => 

                    <div key={i} className="informationQueryModal__sectionComments__comments__container">
                    
                        <div className="informationQueryModal__sectionComments__comments__container__title">
                            <h1>{data.username}</h1>
                            <h2>{data.create_at.toLocaleString()}</h2>
                        </div>

                        <div className="informationQueryModal__sectionComments__comments__container__content">
                            <p>
                                {data.content}
                            </p>
                        </div>

                    </div>

                ) : ""}

            </div>

        </div>

        <div className="informationQueryModal__inputComment">

            <div className="informationQueryModal__inputComment__textarea">
                <textarea onChange={(e) => setDataNewComment({...dataNewComment, content: e.target.value})}/>
            </div>

            <button onClick={() => HandleChangeButton("postComment", dispatch, fetchDataPOST, dataNewComment, setDataComments)}>
                Post comment
            </button>

        </div>

        <div className="informationQueryModal__button">
            <button onClick={() => HandleChangeButton("close", dispatch, fetchDataPOST, dataNewComment, setDataComments)}>
                Close
            </button>
        </div>

    </div>);
}//End component

export default InformationQueryModal;
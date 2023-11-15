import "./_homePage.scss" //Import styles SASS
import { 
    InitialStateHomePage,
    HandleChangeButton 
} from "./stateHomePage"; //Import initial states

//Importing content multimedia
import logo from "../../multimedia/LogoForetInventory.png";

//Component HomePage
function HomePage(){

    //Import states and data
    const {
        userNameLogin,
        setUserNameLogin,
        errorMessage,
        setErrorMessage,
        setUserName,
        navigate
    } = InitialStateHomePage();

    return(<div className="homePage">

        <div className="homePage__information">

            <img src={logo} alt="" />

            <div className="homePage__information__title">
                <h1>Welcome to Forest Inventory</h1>
                <p>
                    In this WebSite you can will be able to 
                    search for data about Forest Inventory. 
                    Also, you can analyze this data. 
                </p>
            </div>

            <div className="homePage__information__textField">

                <div className="homePage__information__textField__input">
                    <h2>Enter a Username</h2>
                    <div className="homePage__information__textField__input__container">
                        <input onChange={(e) => setUserNameLogin(e.target.value)} type="text" />
                    </div>
                </div>

                <p style={{display: errorMessage === false ? "none" : "inline"}}>Please, enter a username</p>

            </div>

            <button onClick={() => HandleChangeButton(userNameLogin, setUserName, setErrorMessage, navigate)}>
                Continue
            </button>

        </div>

    </div>);
}//End componente

export default HomePage;
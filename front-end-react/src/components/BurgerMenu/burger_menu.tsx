import "./_burgerMenu.scss"; //Importing styles
import { 
    InitialStateBurgerMenu,
    HandleChangeButtonOption 
} from "./stateBurgerMenu";

//Import content multimedia
import logo from "../../multimedia/LogoForetInventory.png";
import iconLogOut from "../../multimedia/logOut.png";

//Component burger menu
function BurgerMenu(){

    //Importing states and data
    const {
        dataOptionsAnalitics,
        dataOptionsFeatures,
        dispatch,
        navegation
    } = InitialStateBurgerMenu();

    return (<div className="burgerMenu">

        <div className="burgerMenu__logo">
            <img src={logo} alt="" />
            <h1>Forest <span>Inventory</span></h1>
        </div>

        <div className="burgerMenu__options">

            <h2>ANALITICS</h2>

            <ul>
                {dataOptionsAnalitics.map((data, i) => 
                    <li key={i} onClick={() => HandleChangeButtonOption(data.ref, dispatch, navegation)}>
                        <img src={data.img} alt="" />
                        {data.name}
                    </li>)
                }
            </ul>

            <div className="burgerMenu__options__divider"/>

            <h2>FEATURES</h2>

            <ul>
                {dataOptionsFeatures.map((data, i) => 
                    <li key={i} onClick={() => HandleChangeButtonOption(data.ref, dispatch, navegation)}>
                        <img src={data.img} alt="" />
                        {data.name}
                    </li>)
                }
            </ul>

        </div>

        <div className="burgerMenu__buttonLogOut">
            <button onClick={() => HandleChangeButtonOption("logOut", dispatch, navegation)}>
                <img src={iconLogOut} alt="" />
                Log out
            </button>
        </div>

    </div>);
}//End component

export default BurgerMenu;
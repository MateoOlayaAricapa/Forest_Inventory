import "./_dashboard.scss"; //Importing styles

//Importing components
import BurgerMenu from "../../components/BurgerMenu/burger_menu";
import PanelPopulationEvaluation from "../../components/PopulationEvaluation/panel_populationEvaluation";

//Importing content multimedia
import iconPhotoTest from "../../multimedia/Photo.png";

import { 
    InitialStateDashboardPages 
} from "./stateDashboardPages";

//Componente dashboard pages
function DashboardPages(){

    //Importing states and data
    const {
        userName,
        valuesBurgerMenu
    } = InitialStateDashboardPages();

    return (<div className="dashboardPages">

        <div className="dashboardPages__mainContainer">

            <div className="dashboardPages__mainContainer__burgerMenu">
                <BurgerMenu/>
            </div>

            <div className="dashboardPages__mainContainer__infoSection">
                
                <div className="dashboardPages__mainContainer__infoSection__header">

                    <h1>Welcome Back, {userName}</h1>

                    <div className="dashboardPages__mainContainer__infoSection__header__photo">
                        <img src={iconPhotoTest} alt="" />
                    </div>

                </div>

                <div className="dashboardPages__mainContainer__infoSection__panelOptions">
                    {valuesBurgerMenu[0] && <PanelPopulationEvaluation/>}
                </div>

            </div>

        </div>

    </div>)
}//End component

export default DashboardPages;
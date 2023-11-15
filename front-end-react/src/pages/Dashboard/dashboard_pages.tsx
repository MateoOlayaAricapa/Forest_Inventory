import "./_dashboard.scss"; //Importing styles

//Importing components
import BurgerMenu from "../../components/BurgerMenu/burger_menu";

//Componente dashboard pages
function DashboardPages(){
    return (<div className="dashboardPages">

        <div className="dashboardPages__mainContainer">

            <div className="dashboardPages__mainContainer__burgerMenu">
                <BurgerMenu/>
            </div>

            <div className="dashboardPages__mainContainer__infoSection">
                
            </div>

        </div>

    </div>)
}//End component

export default DashboardPages;
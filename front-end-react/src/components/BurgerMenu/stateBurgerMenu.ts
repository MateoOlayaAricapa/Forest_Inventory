//Importing content multimedia
import iconStates from "../../multimedia/States.png";
import iconTest from "../../multimedia/other.png";

//Functión that initial states of the component
export const InitialStateBurgerMenu = () => {

    const dataOptionsAnalitics = [
        {img: iconStates, name: "Population evaluation", ref: "population"},
        {img: iconTest, name: "Another", ref: "another"}
    ]

    const dataOptionsFeatures = [
        {img: iconTest, name: "Another", ref: "another"},
        {img: iconTest, name: "Another", ref: "another"}
    ]

    //Return values
    return {
        dataOptionsAnalitics,
        dataOptionsFeatures
    }

}

//Function that is executes when a burger menu button is pressed
export const HandleChangeButtonOption = (
    refButtonOption: string
) => {

    console.log(refButtonOption);

}
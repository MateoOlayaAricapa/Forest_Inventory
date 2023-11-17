import {Dispatch, SetStateAction, useState} from "react";
import { typeSelectYears } from "../../../TypeTypeScript/type";
import { useFetchGET } from "../../../customHook/useFetch";
import { FetchButtonGetPost } from "../../../customHook/useFetch";
import { typeDataQueries } from "../../../TypeTypeScript/type";

//Redux
import {useDispatch} from "react-redux";
import { openSaveQueryModal } from "../../../FeaturesRedux/ModalSlice/modal_slice";

type typeDataGraphics = {
    state: string, 
    total_evaluations: number, 
    evaluations: string
}

//Functión that initial states of the component
export const InitialStatePanelFirstQuestion = () => {

    const [selectYears, setSelectYears] = useState<typeSelectYears>({
        startYear: "2008", endYear: "2019"
    });

    const listYears = [
        {value: "1968", label: "1968"},
        {value: "1970", label: "1970"},
        {value: "1972", label: "1972"},
        {value: "1974", label: "1974"},
        {value: "1975", label: "1975"},
        {value: "1976", label: "1976"},
        {value: "1977", label: "1977"},
        {value: "1978", label: "1978"},
        {value: "1980", label: "1980"},
        {value: "1981", label: "1981"},
        {value: "1982", label: "1982"},
        {value: "1983", label: "1983"},
        {value: "1984", label: "1984"},
        {value: "1985", label: "1985"},
        {value: "1986", label: "1986"},
        {value: "1987", label: "1987"},
        {value: "1988", label: "1988"},
        {value: "1989", label: "1989"},
        {value: "1990", label: "1990"},
        {value: "1991", label: "1991"},
        {value: "1992", label: "1992"},
        {value: "1993", label: "1993"},
        {value: "1994", label: "1994"},
        {value: "1995", label: "1995"},
        {value: "1996", label: "1996"},
        {value: "1997", label: "1997"},
        {value: "1998", label: "1998"},
        {value: "1999", label: "1999"},
        {value: "2000", label: "2000"},
        {value: "2001", label: "2001"},
        {value: "2002", label: "2002"},
        {value: "2003", label: "2003"},
        {value: "2004", label: "2004"},
        {value: "2005", label: "2005"},
        {value: "2006", label: "2006"},
        {value: "2007", label: "2007"},
        {value: "2008", label: "2008"},
        {value: "2009", label: "2009"},
        {value: "2010", label: "2010"},
        {value: "2011", label: "2011"},
        {value: "2012", label: "2012"},
        {value: "2013", label: "2013"},
        {value: "2014", label: "2014"},
        {value: "2015", label: "2015"},
        {value: "2016", label: "2016"},
        {value: "2017", label: "2017"},
        {value: "2018", label: "2018"},
        {value: "2019", label: "2019"},
        {value: "2020", label: "2020"},
        {value: "2021", label: "2021"},
    ];

    //Variable that saves all the queries data (list)
    const [dataQueries, setDataQueries] = useState<typeDataQueries[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(false);

    const [dataGraphics, setDataGraphics] = useState<typeDataGraphics[]>([]);
    const [isLoadingGraphic, setIsLoadingGraphics] = useState<boolean>(false);

    //Consulting all queries
    useFetchGET("http://localhost:5000/query/data/queries", setIsloading, setDataQueries);

    //Importing functions fetch for GET and POST API
    const {fetchDataGET} = FetchButtonGetPost();

    //Redux
    const dispatch = useDispatch();

    //Returning values
    return {
        listYears,
        selectYears,
        setSelectYears,
        dispatch,
        dataQueries,
        isLoading,
        fetchDataGET,
        dataGraphics,
        setDataGraphics,
        isLoadingGraphic,
        setIsLoadingGraphics
    }
    
}

//Function that is executed when the button is pressed
export const HandleChangeButton = async (
    refButton: string,
    selectYears: typeSelectYears,
    dispatch: Function,
    fetchDataGET: Function,
    setDataGraphics: Dispatch<SetStateAction<typeDataGraphics[]>>,
    setIsLoadingGraphics: Dispatch<SetStateAction<boolean>>,
) => {
    
    switch(refButton){
        case "consult":

            setIsLoadingGraphics(true);

            //Getting data of fetch GET
            const {dataResult} = await fetchDataGET(`http://localhost:5000/bigQuery/data/${selectYears.startYear}/${selectYears.endYear}`);

            if(dataResult.Messages === "not found"){

                setIsLoadingGraphics(false);
                alert("Not Found Data. Please, select other years");

            }else{
                setIsLoadingGraphics(false);
                setDataGraphics(dataResult);
            }//End condition

            break;

        case "save":
            dispatch(openSaveQueryModal());
            break;
    }//end switch
}
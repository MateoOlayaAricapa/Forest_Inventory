import {useEffect, Dispatch, SetStateAction} from "react";

//
export const useFetchGET = <T>(
    url: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<T>>
) => {

    useEffect(() => {

        async function PetitionAPI(){

            try {
        
                const result = await fetch(url);
                const dataResult = await result.json();
                
                if(dataResult.length !== 0){
                    setData(dataResult);
                    setLoading(true);
                }//End condition
        
            } catch (error) {
                console.log(`Error: [${error}]`);
                setLoading(false);
            }//End catch

        }//End function

        PetitionAPI();

    }, [url]);

}

//
export const FetchButtonGetPost = <T,>() => {

    const fetchDataPOST = async (url: string, dataPost: T) => {

        try {
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataPost)
            };

            const results = await fetch(url, requestOptions);
            const dataResults = await results.json();
            
            return {dataResults};

        } catch (error) {
            console.log(`Error: [${error}]`);
        }//End catch

    }//End function

    const fetchDataGET = async (url: string) => {

        try{

            const result = await fetch(url);
            const dataResult = await result.json();

            return {dataResult}

        }  catch (error) {
            console.log(`Error: [${error}]`);
        }//End catch

    }//End function

    //Returning values
    return {fetchDataGET, fetchDataPOST};

}
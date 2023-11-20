import {useEffect, Dispatch, SetStateAction} from "react";
import {io}  from 'socket.io-client';
import { URI_BACKEND } from "../uriQueries/uri_queries";

//Function that applies a useEffect (GET) to query data when the component is mounted
export const useFetchGET = <T>(
    url: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<T[]>>
) => {

    useEffect(() => {

        const socket = io(`http://${URI_BACKEND}`);

        async function PetitionAPI(){

            try {

                //Receiving data from the server when saving a query
                socket.on('save_new_query', (data: T) => {
                    
                    //Saving new data in the list dataQueries
                    setData(prevData => {

                        if (Array.isArray(prevData)) {
                            
                            return [...prevData, data];
                        
                        } else {
                           
                            return [data];
                        
                        }//End condition

                    });

                });

                //Receiving data from the server when saving a comment
                socket.on('save_new_comment', (data: T) => {
                    
                    //Saving new data in the list dataComments
                    setData(prevData => {

                        if (Array.isArray(prevData)) {
                            
                            return [...prevData, data];
                        
                        } else {
                           
                            return [data];
                        
                        }//End condition

                    });

                });
        
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

        return () => {
            socket.disconnect();
        };

    }, [url]);

}

//Functions that execute fetch GET or POST when a button is pressed in the application
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
import { useState, useEffect } from "react";
import { fetchedObject } from "../types/userTypes";

export default function useFetch(url:string, requestOptions: RequestInit) : fetchedObject {
    const initialEmptyArray : any[] = []
    const [data, setData] = useState(initialEmptyArray);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error,setError] = useState("")
    
    const setResultOk = (result:any) => {
        let {data:returnData} = result
        let typedReturnData : any[] = returnData
        setData(typedReturnData)
    }
    useEffect(() => 
    {
        const doFetch = async() => {
            setLoading(true)
            try{
               const response = await fetch(url, requestOptions)
               const result =  await response.json()
               console.log(response)
               console.log(result)
               if (response.ok) {
                console.log("It is ok")
                setResultOk(result)
               }
               else {
                console.log("It is not ok")
                setHasError(true)
                setError(result.message)
               }
            } catch (err:any) {
                setHasError(true)
                let error :TypeError = err
                setError(error.message)
            } finally {
                setLoading(false)
                console.log(`Error: ${error}`)
                console.log(`result: ${data.length | -2 }`)
                console.log(`Data: ${data}`)
            }            
                    // .then(data => {
                    //     let {data:returnData} = data
                    //     let typedReturnData : any[]  = returnData
                    //     setData(typedReturnData);
                    //     setLoading(false);
                    // }
    }

    doFetch();
    }, [url]);
    
    return {returnedData:data, isLoading: loading, hasError, error}; 
}
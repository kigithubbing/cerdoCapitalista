import { useState, useEffect } from "react";
type fetchedObject ={
    returnedData: any[],
    isLoading : boolean
}

export default function useFetch(url:string, requestOptions: RequestInit) : fetchedObject {
    const initialEmptyArray : any[] = []
    const [data, setData] = useState(initialEmptyArray);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => 
    {
        const doFetch = async() => {
            await fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    let {data:returnData} = data
                    let typedReturnData : any[]  = returnData
                    setData(typedReturnData);
                    setLoading(false);
                }
    )}

    doFetch();
    }, [url]);
    
    return {returnedData:data, isLoading: loading}; 
}
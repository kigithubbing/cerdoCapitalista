import { coinMarketBaseUrl, coinMarketHeaders , proCoinMarketBaseUrl } from "../constants"
import useFetch from "../hooks/useFetch"
import { fetchedObject } from "../types/userTypes"
import { DataLoading } from "./DataLoading"
import ErrorMessage from "./ErrorMessage"
export default function Mosaic(props:{name:string}) {

    const requestOptions :RequestInit= {
        method: 'GET',
        headers: coinMarketHeaders,
        redirect: 'follow'
    }
const fetchDescription:string = `${proCoinMarketBaseUrl}/v1/exchange/info?slug=${props.name.toLocaleLowerCase()}`
const returnData : fetchedObject = useFetch(fetchDescription, requestOptions)

if(returnData.isLoading) { return <DataLoading /> }
if(returnData.hasError) { return <ErrorMessage message={returnData.error}  />}

return(
    <>
    <div key={props.name} id={props.name}>
        <h2>{props.name}</h2>
        <hr></hr>
        <h4>Description</h4>
        <div>
            
        </div>
    </div>
    </>)
}
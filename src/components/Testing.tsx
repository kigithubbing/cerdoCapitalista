import { coinMarketBaseUrl, coinMarketHeaders, proCoinMarketBaseUrl } from "../constants";
import useFetch from "../hooks/useFetch";
import { DataLoading } from "./DataLoading";
import ErrorMessage from "./ErrorMessage";
export default function Testing() {
 
    const urlString:string = `${proCoinMarketBaseUrl}/v1/exchange/info?slug=binance`
    const requestOpts : RequestInit = {
        method: 'GET',
        headers : coinMarketHeaders,
        redirect : 'follow'
    }
    const {returnedData:data,isLoading,hasError,error} = useFetch(urlString,requestOpts)

    if (isLoading) return <DataLoading/>
    if (hasError) return <ErrorMessage message={error} />

    return (<>
        <div>resu</div>
        <p> {data}</p>
    </>)

}
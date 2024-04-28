import useFetch from "../../hooks/useFetch"
import { apiBaseUrl , headerAPICall} from "../../constants"
import { DataLoading } from "../DataLoading";
import ErrorMessage from "../ErrorMessage";
import Mosaic from '../Mosaic';

const requestOptions :RequestInit= {
    method: 'GET',
    headers: headerAPICall,
    redirect: 'follow'
  };

export default function Exchange ()
{
    const apiURL:string = `${apiBaseUrl}/exchanges`
    const {returnedData, isLoading, hasError, error} = useFetch(apiURL , requestOptions)
    const listOfExchanges = (): any =>
    returnedData.map(item=> <Mosaic name={item.name} />)
   
    if(hasError) return <ErrorMessage message={error} />
    if(isLoading) return <DataLoading/>

    return (<>
        <h1>List Of Exchanges</h1>
         <ul>
           {listOfExchanges()}
         </ul>
      </>)

}
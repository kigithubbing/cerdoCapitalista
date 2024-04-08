import useFetch from "../../hooks/useFetch"
import { apiBaseUrl , headerAPICall} from "../../constants"

const requestOptions :RequestInit= {
    method: 'GET',
    headers: headerAPICall,
    redirect: 'follow'
  };

export default function Exchange ()
{
    const apiURL:string = `${apiBaseUrl}/exchanges`
    const {returnedData, isLoading} = useFetch(apiURL , requestOptions)
    const listOfExchanges = (): any =>
    returnedData.map(item=> <li>{item.name}</li>)
   
    return (<>
        <h1>List Of Exchanges</h1>
         <ul>
           {listOfExchanges()}
         </ul>
      </>)

}
import { apiBaseUrl, headerAPICall } from '../../constants';
import useFetch from '../../hooks/useFetch';

const requestOptions :RequestInit= {
  method: 'GET',
  headers: headerAPICall,
  redirect: 'follow'
};

type exchangeData={
    name:string;
};

type exchangeResponse={
  returnedData : exchangeData[],
  isLoading:boolean
}

export default function CryptoExchange() {
    const apiURL:string = `${apiBaseUrl}/cryptocurrency_exchanges`
    const {returnedData,isLoading}: exchangeResponse = useFetch(apiURL,requestOptions)
        
    const listOfExchanges = (): any =>
         returnedData.map(item=> <li>{item.name}</li>)
    

    return (<>
          <h1>List Of Crypto Exchanges</h1>
           <ul>
             {listOfExchanges()}
           </ul>
        </>)
}
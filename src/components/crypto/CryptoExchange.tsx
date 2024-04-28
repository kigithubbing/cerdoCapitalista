import { apiBaseUrl, headerAPICall } from '../../constants';
import useFetch from '../../hooks/useFetch';
import { DataLoading } from '../DataLoading';
import ErrorMessage from '../ErrorMessage';
import Mosaic from '../Mosaic';
import { useUserDetailsStore } from '../../stores/useUserDetailsStore';
import '../userBox.css'

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
  isLoading:boolean,
  hasError: boolean,
  error : string 
}

export default function CryptoExchange() {
    const apiURL:string = `${apiBaseUrl}/cryptocurrency_exchanges`
    const {returnedData,isLoading, hasError, error}: exchangeResponse = useFetch(apiURL,requestOptions)
    const [user,_,__] = useUserDetailsStore(state => [
      state.user,state.createUser, state.getUser
  ]);
    
    const listOfExchanges = (): any =>
         returnedData.map(item=> <Mosaic name={item.name} /> )
    
         if(hasError) return <ErrorMessage message={error} />
         if(isLoading) return <DataLoading />

    return (<>
          <div id="user">
            Hi, {user.name}
          </div>
          <h1>List Of Crypto Exchanges</h1>
          <ul>{listOfExchanges()}</ul>
             
        </>)
}
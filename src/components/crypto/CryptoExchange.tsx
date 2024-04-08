import {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch';

const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "1931756393msh75489006095d296p1bd52bjsn2a4cfd2e7bb2");
myHeaders.append("X-RapidAPI-Host", "twelve-data1.p.rapidapi.com");

const requestOptions :RequestInit= {
  method: 'GET',
  headers: myHeaders,
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
    // const initialState : exchangeData[]= []
    // const [data,setdata] = useState(initialState) ;

    const {returnedData,isLoading}: exchangeResponse = useFetch("https://twelve-data1.p.rapidapi.com/cryptocurrency_exchanges",requestOptions)
        
    const listOfExchanges = (): any =>
         returnedData.map(item=> <li>{item.name}</li>)
    

    return (<>
          <h1>List Of Exchanges</h1>
           <ul>
             {listOfExchanges()}
           </ul>
        </>)
}
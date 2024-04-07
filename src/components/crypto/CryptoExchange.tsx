import {useEffect, useState} from 'react'

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

export default function CryptoExchange() {
    const initialState : exchangeData[]= []
    const [data,setdata] = useState(initialState) ;

    useEffect(() => {
        const fetchExchanges = async () => {
            
            const request = await fetch("https://twelve-data1.p.rapidapi.com/cryptocurrency_exchanges",requestOptions)
            const promise = await request.json()
           
            const {data:requestedData} = promise
           
            setdata(requestedData);
        }

        fetchExchanges()
    },[])

    const listOfExchanges = (): any =>
         data.map(item=> <li>{item.name}</li>)
    

    return (<>
    <h1>List Of Exchanges</h1>
           <ul>
             {listOfExchanges()}
           </ul>
        </>)
}
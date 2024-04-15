import { coinMarketBaseUrl, coinMarketHeaders , proCoinMarketBaseUrl } from "../constants"
import useFetch from "../hooks/useFetch"
import { fetchedObject } from "../types/userTypes"
import { DataLoading } from "./DataLoading"
import ErrorMessage from "./ErrorMessage"
import { cryptoExchanges } from "../assets/coinMarket/CryptoExchanges"
import {fiatCurrencies} from "../assets/miscelanous/fiatCurrencies"
export default function Mosaic(props:{name:string}) {

    type currenciesAsset = {
        name:string,
        abbreviation :string,
        coinImage :string
    }
const currencies : currenciesAsset[] =  fiatCurrencies.currencies

const exchangeName :string =props.name.toLocaleLowerCase();
const details = cryptoExchanges.data.exchanges.find(exchanges=> exchanges.slug === exchangeName)
// const fiatCoins = fiatCurrencies?.currencies.filter(curr=> 
//     details?.fiats.map(c=> c.replace(" ","") ===curr.abbreviation ? curr.coinImage : curr )
//  )

const fiatCoins = details?.fiats.map(f=> currencies.filter(c=>  f.replace(" ","") === c.abbreviation ) ).flat()
    console.log(fiatCoins)

//  console.log(details?.fiats.every( mon=> fiatCurrencies?.currencies.forEach(curr=> mon.replace(" ","") !== curr.abbreviation) ) )

return(
    <>
    <div key={exchangeName} id={details?.id.toString()}>
        <h2><img src={details?.logo}/> {props.name}</h2>
        <hr></hr>
        <h4>{details?.description}</h4>
        <hr></hr>
        <h3>People can trade with the currencies</h3>
        <div>
           {fiatCoins?.map(f=> <img width={70} height={70} src={f.coinImage} alt={f.coinImage}  /> )} 
        </div>
    </div>
    </>)
}
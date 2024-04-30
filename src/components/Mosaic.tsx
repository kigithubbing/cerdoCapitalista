import { cryptoExchanges } from "../assets/coinMarket/CryptoExchanges"
import {fiatCurrencies} from "../assets/miscelanous/fiatCurrencies"
import { useUserFavoriteStore } from "../stores/useUserFavoriteStore"
import { useUserDetailsStore } from "../stores/useUserDetailsStore"



type currenciesAsset = {
    name:string,
    abbreviation :string,
    coinImage :string
}

export default function Mosaic(props:{name:string}) {


const currencies : currenciesAsset[] =  fiatCurrencies.currencies
const exchangeName :string =props.name.toLocaleLowerCase();
const details = cryptoExchanges.data.exchanges.find(exchanges=> exchanges.slug === exchangeName)
// const fiatCoins = fiatCurrencies?.currencies.filter(curr=> 
//     details?.fiats.map(c=> c.replace(" ","") ===curr.abbreviation ? curr.coinImage : curr )
//  )

const fiatCoins = details?.fiats.map(f=> currencies.filter(c=>  f.replace(" ","") === c.abbreviation ) ).flat()
     console.log(fiatCoins)

//  console.log(details?.fiats.every( mon=> fiatCurrencies?.currencies.forEach(curr=> mon.replace(" ","") !== curr.abbreviation) ) )
const [userFavorite,setFavorite] = useUserFavoriteStore ((favoriteState )=> [ favoriteState.userFavorite, favoriteState.setUserFavorite])
const [_,__,getUser] = useUserDetailsStore ( detailStore => [detailStore.user, detailStore.createUser, detailStore.getUser])
const addFavorite = (atomName:string) => {
    const {id:userId} = getUser()
    setFavorite( {id:userId,fav:atomName})
    console.log(userFavorite)
}
return(
    <>
    <div key={exchangeName} id={details?.id.toString()}>
        <div className="title">
        <h2><img src={details?.logo}/> {props.name}</h2>
        <input type="image" src="src/assets/vecteezy_illustration-vector-graphic-of-star_9315440.svg" width={95} height={70}
        onClick={()=> addFavorite(exchangeName)} />
        </div>
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
export const apiBaseUrl:string = "https://twelve-data1.p.rapidapi.com"

export const headerAPICall = new Headers();
headerAPICall.append("X-RapidAPI-Key", "1931756393msh75489006095d296p1bd52bjsn2a4cfd2e7bb2");
headerAPICall.append("X-RapidAPI-Host", "twelve-data1.p.rapidapi.com");

export const coinMarketBaseUrl:string = "https://sandbox-api.coinmarketcap.com"
export const proCoinMarketBaseUrl:string = "http://locahost:3000/coinAPI"
export const coinMarketHeaders = new Headers();
coinMarketHeaders.append("X-CMC_PRO_API_KEY" , "c5958535-d9ec-4746-9fd6-2612fed2c107")
// coinMarketHeaders.append("Accept","application/json")
// coinMarketHeaders.append("Access-Control-Allow-Origin","*")
// coinMarketHeaders.append("mode","no-cors")
// coinMarketHeaders.append("Access-Control-Allow-Headers","accepts,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,x-cmc_pro_api_key")
// coinMarketHeaders.append("Access-Control-Allow-Methods","GET")
// coinMarketHeaders.append("Accept-Encoding","deflate, gzip")
// coinMarketHeaders.append("Sec-Fetch-Mode","no-cors")
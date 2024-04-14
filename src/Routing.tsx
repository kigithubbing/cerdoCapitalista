import {createBrowserRouter} from 'react-router-dom'
import Index from './components/index/Index'
import CryptoExchange  from './components/crypto/CryptoExchange';
import Exchange from './components/regular/Exchange';
import Testing from './components/Testing';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Index/>
    },
    {
        path:"/cryptoexchange",
        element: <CryptoExchange />
    },
    {
        path:"/exchange",
        element: <Exchange />
    },
    {
        path: "/test",
        element: <Testing />    
    }
]);

function Routing () {return  router }; 

export default Routing;

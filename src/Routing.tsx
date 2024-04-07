import {createBrowserRouter} from 'react-router-dom'
import Index from './components/index/Index'
import CryptoExchange  from './components/crypto/CryptoExchange';
import Exchange from './components/regular/Exchange';

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
    }
]);

function Routing () {return  router }; 

export default Routing;

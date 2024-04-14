import { NavLink } from "react-router-dom"

function Index() {


    return (
        <div>
            <div >
               <NavLink to={'/cryptoexchange'} > 
                <p>Mercados Crypto</p>
                </NavLink>
            </div>
            <div >
            <NavLink to={'/exchange'} > 
                <p>Mercado de Valores</p>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/test'}>
                    <p>Test</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Index
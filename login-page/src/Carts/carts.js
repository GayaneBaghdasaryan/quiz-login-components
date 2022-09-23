import { NavLink, Outlet } from "react-router-dom";
import './carts.css'
const Carts = () => {
    
    return(
        <div className='main'>
        <div className='container'>
            <div className="wrapper">
                <header>
                    <NavLink className='link' to='/'>Login</NavLink>
                    <NavLink className='link' to='/about'>About</NavLink>
                    <NavLink className='link' to='/bag'>Bag</NavLink>
                </header>
            </div>
            <Outlet/>
        </div>
       </div>
    )
}

export default Carts;
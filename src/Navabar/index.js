import {Link } from "react-router-dom";
import './index.css';

const Navbar =()  =>{
    return(
        <div  className='navabar-container'>
            <div>
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/L0X6Q6j/travel-Unbound-Logo.png" alt="travel-Unbound-Logo" border="0" className="logo-company" /></a>
            </div>
                <nav className="navbar-list-form">
                    <ul className="list-form">
                        <li className="list-ul">
                            <Link to="/" className="list">Home</Link>
                        </li>
                        <li className="list-ul">
                            <Link to="/about" className="list">About</Link>
                        </li>
                        <li className="list-ul">
                            <Link to="/days" className="list">Days</Link>
                        </li>
                        <li className="list-ul">
                            <Link to="/prices" className="list">Prices</Link>
                        </li>
                        <li className="list-ul">
                            <Link to="/contact" className="list">contact</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar
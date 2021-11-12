import React from "react";
import '../styles/Navbar.css';
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar">
            <ul className="links">
                <li><Link to="/MainPage"> Homie </Link></li>
                <li><Link to="/gallery"> Gallery </Link></li>
                <li><Link to="/about"> About Me </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
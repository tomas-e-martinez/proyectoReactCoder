import React from "react";
import './styles.css';
import CartWidget from "./CartWidget/CartWidget";

const NavBar = ({brand, seccion1, seccion2, seccion3, seccion4}) => {
    return (
        <header className="header">
            <div className="divHeader">
                <a className="logo" href="#">{brand}</a>
                <CartWidget contador='3'/>
            </div>
            <nav className="nav">
                <ul className="navUl">
                    <li className="navItem"><a href="#">{seccion1}</a></li>
                    <li className="navItem"><a href="#">{seccion2}</a></li>
                    <li className="navItem"><a href="#">{seccion3}</a></li>
                    <li className="navItem"><a href="#">{seccion4}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
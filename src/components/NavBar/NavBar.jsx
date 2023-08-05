import React from "react";
import './styles.css';
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = ({brand, sections}) => {
    return (
        <header className="header">
            <div className="divHeader">
                <NavLink to='/' className="logo">{brand}</NavLink>
                <CartWidget/>
            </div>
            {/* <nav className="nav">
                <ul className="navUl">
                    {sections.map((section, index) => (
                        <li className="navItem" key={index}>
                            <a href="#">{section.text}</a>
                        </li>
                    ))}
                </ul>
            </nav> */}
        </header>
    )
}

export default NavBar;
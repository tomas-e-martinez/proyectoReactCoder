import React from "react";
import './styles.css';
import CartWidget from "./CartWidget/CartWidget";

const NavBar = ({brand, sections}) => {
    return (
        <header className="header">
            <div className="divHeader">
                <a className="logo" href="/">{brand}</a>
                <CartWidget contador='3'/>
            </div>
            <nav className="nav">
                <ul className="navUl">
                    {sections.map((section, index) => (
                        <li className="navItem" key={index}>
                            <a href="#">{section.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
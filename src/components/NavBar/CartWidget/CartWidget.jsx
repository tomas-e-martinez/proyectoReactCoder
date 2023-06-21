import React from "react";
import './styles.css'

const CartWidget = ({contador}) => {
    return (
        <div className="cartDiv">
            <i className="fa-solid fa-cart-shopping cartIcon"></i>
            <p className="contadorCart">{contador}</p>
        </div>
    )
}

export default CartWidget;
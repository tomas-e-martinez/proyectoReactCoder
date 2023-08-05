import React, { useContext } from "react";
import './styles.css'
import { CartContext } from "../../../context/cart-context";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
    const { cart, getTotalItemQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCart = () => {
        navigate('/cart');
    }
    return (
        <div onClick={goToCart} className="cartDiv">
            <i className="fa-solid fa-cart-shopping cartIcon"></i>
            <p className="contadorCart">{getTotalItemQuantity()}</p>
        </div>
    )
}

export default CartWidget;
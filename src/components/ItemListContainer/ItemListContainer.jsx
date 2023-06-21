import React from "react";
import './styles.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemListContainerDiv">
            <p className="itemListContainerP">{greeting}</p>
        </div>
    )
}

export default ItemListContainer;
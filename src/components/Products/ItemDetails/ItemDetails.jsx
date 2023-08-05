import './styles.css'
import { useContext } from 'react'
import { CartContext } from '../../../context/cart-context'

const ItemDetails = ({id, image, name, category, description, price, stock,  }) => {
    const {cart, onAddToCart, onDecreaseItem, onRemoveItem, total, getTotalItemQuantity} = useContext(CartContext)
    return (
        <div className='cardDetails'>
            <div className='cardDetailsImageContainer'>
                <img className='cardDetailsImage' src={image} alt={name} />
            </div>
            <div className='cardDetailsContent'>
              <h3 className='cardDetailsName'>{name}</h3>
              <p className='cardDetailsCategory'>{category}</p>
              <p className='cardDetailsDescription'>{description}</p>
              <p className='cardDetailsPrice'>${price}</p>
              <p className='cardDetailsStock'>{stock} en stock</p><div className='cardDetailsActions'>
              <button onClick={() => onAddToCart(id)}className='cardDetailsButton'>Agregar al carrito</button>
            </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;
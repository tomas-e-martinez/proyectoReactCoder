import './styles.css'

const ItemDetails = ({id, image, name, category, description, price, stock, onAddToCart }) => {
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
              <button onClick={onAddToCart}className='cardDetailsButton'>Agregar al carrito</button>
            </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;
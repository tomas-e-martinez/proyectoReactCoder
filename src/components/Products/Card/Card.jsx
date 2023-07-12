import './styles.css'

const Card = ({id, image, name, category, description, price, stock, onAddToCart, onShowDetails}) => {
    return (
        <div key={id} className='card' onClick={() => onShowDetails(id)}>
            <img className='cardImage' src={image} alt={name} />
            <div className='cardContent'>
              <h3 className='cardName'>{name}</h3>
              <p className='cardCategory'>{category}</p>
              <p className='cardDescription'>{description}</p>
              <p className='cardPrice'>${price}</p>
              <p className='cardStock'>{stock} en stock</p>
            </div>
            <div className='cardActions'>
              <button onClick={onAddToCart}className='cardButton'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Card;
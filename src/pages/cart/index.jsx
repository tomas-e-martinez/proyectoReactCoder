import { useContext } from 'react'
import './styles.css'
import { CartContext } from '../../context/cart-context'

function Cart ({ }) {
    const {cart, onAddToCart, onDecreaseItem, onRemoveItem, total, getTotalItemQuantity} = useContext(CartContext)
    return(
        <div className='cartContainerMargin'>
          <div className='cartContainer'>
            <h2>Carrito</h2>
            {cart.length === 0 && <h3>El carrito está vacío.</h3>}
            {
              cart?.length > 0 && cart.map((product) => (
                <div key={product.id} className='cartItem'>
                  <div className='cardImageContainer'>
                    <img className='cardImage' src={product.image} alt={product.name}/>
                  </div>
                  <div className='cartContentContainer'>
                    <p className='cartProductName'>{product.name}</p>
                    <p className='cartQuantity'>Cantidad: {product.quantity}</p>
                    <p className='cartPrice'>${product.price}</p>
                    <p className='cartStock'>Stock: {product.stock}</p>
                    <div className='cartActions'>
                      <button onClick={() => onAddToCart(product.id)} className='cartButtonAdd'>+</button>
                      <button onClick={() => onDecreaseItem(product.id)} className='cartButtonDecrease'>-</button>
                      <button onClick={() => onRemoveItem(product.id)} className='cartButtonRemove'>Eliminar</button>
                    </div>
                  </div>
                </div>
              ))
            }
            {
              cart?.length > 0 && (
                <div className='cartDetailActions'>
                    <div>
                        <p className='cartTotal'>Total: ${total}</p>
                        <p className='cartItemQuantity'>Cantidad de productos: {getTotalItemQuantity()}</p>
                    </div>
                    <button className='cartButtonCheckout'>Finalizar compra</button>
                </div>
              )
            }
          </div>
        </div>
    )
}

export default Cart
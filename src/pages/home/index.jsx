import { useEffect, useState } from 'react'
import './styles.css'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import NavBar from '../../components/NavBar/NavBar'
import Counter from '../../components/Counter/Counter'
import Input from '../../components/Input/Input'
import Card from '../../components/Products/Card/Card'
import ItemDetails from '../../components/Products/ItemDetails/ItemDetails'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants'
import Loader from '../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState(false);
    const [active, setActive] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [productFiltered, setProductFiltered] = useState([])
    const [cart, setCart] = useState([])

    const {data: products, loading: loadingProducts, error: errorProducts} = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);

    const {data: categories, loading: loadingCategories, error: errorCategories} = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);

    const isValidCounter = counter > 0;

    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => {
    if(!isValidCounter) {
        return}
    else {
    setCounter(counter - 1)
    }
    }

    const filterBySearch = (query) => {
    let updateProductList = [...products];

    updateProductList = updateProductList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !==-1;})
    

    setProductFiltered(updateProductList);
    }

    const onChange = (event) => {
    const dato = event.target.value;
    setSearch(dato);
    filterBySearch(dato);
    }

    const onFocus = () => {
    setActive(true);
    }

    const onBlur = () => {
    setActive(false);
    }

    const onShowDetails = (id) => {
        navigate(`/products/${id}`)
    }

    const inputClass = `inputDiv ${active ? 'active' : ''}`;
    
    const onFilter = (name) => {
      setIsFiltered(true);
      const productsByCategory = products.filter((product) => product.category === name);
      setProductFiltered(productsByCategory);
    }

    const onAddToCart = (id) => {
      const item = products.find((product) => product.id === id);
      if(cart?.find((product) => product.id === id)?.quantity === Number(item.stock)) return;
      if(cart?.length === 0){
        setCart([{...item, quantity: 1}])
      }
      if(cart?.length > 0 && !cart?.find((product) => product.id === id)){
        setCart([...cart, {...item, quantity: 1}])
      }
      if(cart?.length > 0 && cart?.find((product) => product.id === id)){
        setCart((currentCart) => {
          return currentCart.map((product) => {
            if(product.id === id) {
              return {...product, quantity: product.quantity +1}
            } else {
              return product
            }
          })
        });
      }
    }

  const onDecreaseCartItem = (id) => {
    if(cart?.find((product) => product.id === id)?.quantity === 1) return;
    if(cart?.length > 0 && cart?.find((product) => product.id === id)) {
      setCart((currentCart) => {
        return currentCart.map((product) => {
          if(product.id === id) {
            return {...product, quantity: product.quantity -1}
          } else {
            return product
          }
        })
      })
    }
  }

  const onRemoveCartItem = (id) => {
    setCart((currentCart) => {
      return currentCart.filter((product) => product.id !== id)
    })
  }

  const sumTotalCart = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  return (
    <>
      {/* <ItemListContainer greeting='Bienvenido/a a GuitarStore. Aquí podrás encontrar gran variedad de guitarras, amplificadores y accesorios.'/>
      <Counter isValidCounter={isValidCounter} counter={counter} decrementCounter={decrementCounter} incrementCounter={incrementCounter} /> */}
      <div className='contentContainer'>
          <h2>Carrito</h2>
          <div className='cartContainer'>
            {cart.length === 0 && <h3>El carrito esta vacío.</h3>}
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
                      <button onClick={() => onDecreaseCartItem(product.id)} className='cartButtonDecrease'>-</button>
                      <button onClick={() => onRemoveCartItem(product.id)} className='cartButtonRemove'>Eliminar</button>
                    </div>
                  </div>
                </div>
              ))
            }
            {
              cart?.length > 0 && <p className='cartTotal'>Total: ${sumTotalCart}</p>
            }
          </div>
          <>
            <div className='categoriesContainer'>
                {loadingCategories && <Loader/>}
                <button onClick={() => setIsFiltered(false)} type='button' className='categoryContainer'>
                  <p className='categoryName'>All</p>
                </button>
                {
                    categories.map((category) => (
                        <button onClick={() => onFilter(category.name)} type='button' key={category.id} className='categoryContainer'>
                          <p key={category.id} className='categoryName'>{category.name}</p>
                        </button>
                    )
                    )
                }
            </div>
            <div className='buscarProductoDiv'>
            <Input 
              placeholder="Buscar producto"
              id='dato'
              required={true}
              name='Buscar'
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              className={inputClass}
            />
          </div>
          <h2 className='headerCardContainer'>Productos</h2>
          <div className='cardContainer'>
            {loadingProducts && <Loader/>}
            {search.length > 0 && productFiltered.length === 0 && <h3>No se encontró el producto</h3>}
            {
              isFiltered ? (
                productFiltered.map((product) => (
                  <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart} />
                ))
              ) : (
              products.map((product) => (
                <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
              ))
              )
            }
            {
              isFiltered && productFiltered.length === 0 && <h2>No se encontraron productos</h2>
            }
          </div>
        </>
      </div>
    </>
  )
}

export default Home

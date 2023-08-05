import { useEffect, useState, useContext } from 'react'
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
import { CartContext } from '../../context/cart-context'


function Home() {

    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState(false);
    const [active, setActive] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [productFiltered, setProductFiltered] = useState([])

    const { setProducts, products: productsContext, onAddToCart, cart } = useContext(CartContext);

    const {data: products, loading: loadingProducts, error: errorProducts} = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);

    const {data: categories, loading: loadingCategories, error: errorCategories} = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);

    useEffect(() => {
      if(products?.length > 0) {
        setProducts(products);
      }
    }, [products, setProducts])

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


    console.log({productsContext, cart})

  return (
    <>
      {/* <ItemListContainer greeting='Bienvenido/a a GuitarStore. Aquí podrás encontrar gran variedad de guitarras, amplificadores y accesorios.'/>
      <Counter isValidCounter={isValidCounter} counter={counter} decrementCounter={decrementCounter} incrementCounter={incrementCounter} /> */}
      <div className='contentContainer'>
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

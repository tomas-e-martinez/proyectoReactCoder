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
    const [showDetails, setShowDetails] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [productFiltered, setProductFiltered] = useState([])

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


  return (
    <>
      {/* <ItemListContainer greeting='Bienvenido/a a GuitarStore. Aquí podrás encontrar gran variedad de guitarras, amplificadores y accesorios.'/>
      <Counter isValidCounter={isValidCounter} counter={counter} decrementCounter={decrementCounter} incrementCounter={incrementCounter} /> */}
      <div className='contentContainer'>
          <>
            <div className='categoriesContainer'>
                {loadingCategories && <Loader/>}
                {
                    categories.map((category) => (
                        <p key={category.id} className='categoryName'>{category.name}</p>
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
              search.length > 0 ? (
                productFiltered.map((product) => (
                  <Card key={product.id} {...product} onShowDetails={onShowDetails} />
                ))
              ) : (
              products.map((product) => (
                <Card key={product.id} {...product} onShowDetails={onShowDetails}/>
              ))
              )
            }
          </div>
        </>
      </div>
    </>
  )
}

export default Home

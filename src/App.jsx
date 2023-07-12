import { useEffect, useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Counter from './components/Counter/Counter'
import Input from './components/Input/Input'
import Card from './components/Products/Card/Card'
import ItemDetails from './components/Products/ItemDetails/ItemDetails'


function App() {

const [counter, setCounter] = useState(0);
const [search, setSearch] = useState(false);
const [active, setActive] = useState(false);
const [products, setProducts] = useState([]);
const [showDetails, setShowDetails] = useState(false);
const [productDetail, setProductDetail] = useState(null);
const [productFiltered, setProductFiltered] = useState([])

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
  setShowDetails(true);
  const findProduct = products.find((product) => product.id === id);
  setProductDetail(findProduct);
}

const inputClass = `inputDiv ${active ? 'active' : ''}`;

const sections = [
  {
    text:"INICIO"
  },
  {
    text:"GUITARRAS"
  },
  {
    text:"AMPLIFICADORES"
  },
  {
    text:"PEDALES Y ACCESORIOS"
  },
]


useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await fetch('https://6499986279fbe9bcf83f9202.mockapi.io/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      } );
      
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }
  getProducts();
}, [])

  return (
    <>
      <NavBar brand='GuitarStore' sections={sections}/>
      {/* <ItemListContainer greeting='Bienvenido/a a GuitarStore. Aquí podrás encontrar gran variedad de guitarras, amplificadores y accesorios.'/>
      <Counter isValidCounter={isValidCounter} counter={counter} decrementCounter={decrementCounter} incrementCounter={incrementCounter} /> */}
      <div className='contentContainer'>
        {showDetails ? (
          <>
          <div className='headerDetailsContainer'>
            <button onClick={() => setShowDetails(false)} className='backButton'>← Volver</button>
            <h2 className='headerDetailsCardContainer'>Detalles del producto</h2></div>
            <ItemDetails {...productDetail}/>
          </>
        ) : (
          <>
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
            {
              search.length > 0 ? (
                productFiltered.map((product) => (
                  <Card {...product} onShowDetails={onShowDetails} />
                ))
              ) : (
              products.map((product) => (
                <Card {...product} onShowDetails={onShowDetails}/>
              ))
              )
            }
          </div>
        </>
        )
        }
        
      </div>
    </>
  )
}

export default App

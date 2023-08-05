import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetails from './pages/product-details'
import { CartProvider } from './context/cart-context'
import Cart from './pages/cart'

function App() {

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


  return (
    <>
      <CartProvider>
        <NavBar brand='GuitarStore' sections={sections}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App

import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetails from './pages/product-details'

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
      <NavBar brand='GuitarStore' sections={sections}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<ProductDetails/>} />
      </Routes>
    </>
  )
}

export default App

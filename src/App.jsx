import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
    <>
      <NavBar brand='GuitarStore' seccion1='Inicio' seccion2='Guitarras' seccion3='Amplificadores' seccion4='Pedales y accesorios'/>
      <ItemListContainer greeting='Bienvenido/a a GuitarStore. Aquí podrás encontrar gran variedad de guitarras, amplificadores y accesorios.'/>
    </>
  )
}

export default App

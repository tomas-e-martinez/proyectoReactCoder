import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Counter from './components/Counter/Counter'
import Input from './components/Input/Input'


function App() {

const [counter, setCounter] = useState(0);
const [dato, setDato] = useState('');
const [active, setActive] = useState(false);

const isValidCounter = counter > 0;

const incrementCounter = () => setCounter(counter + 1);
const decrementCounter = () => {
  if(!isValidCounter) {
    return}
   else {
  setCounter(counter - 1)
}
}

const onChange = (event) => {
  const value = event.target.value;
  setDato(dato);
}

const onFocus = () => {
  setActive(true);
}

const onBlur = () => {
  setActive(false);
}

const inputClass = `inputDiv ${active ? 'active' : ''}`

  return (
    <>
      <NavBar brand='GuitarStore' seccion1='Inicio' seccion2='Guitarras' seccion3='Amplificadores' seccion4='Pedales y accesorios'/>
      {/* <ItemListContainer greeting='Bienvenido/a a GuitarStore. Aquí podrás encontrar gran variedad de guitarras, amplificadores y accesorios.'/>
      <Counter isValidCounter={isValidCounter} counter={counter} decrementCounter={decrementCounter} incrementCounter={incrementCounter} /> */}
      {/* <div style={{width: '300px', padding:'1rem'}}>
        <Input 
          placeholder="Dato"
          id='dato'
          required={true}
          name='Ingresar dato'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClass}
        />
      </div> */}
    </>
  )
}

export default App

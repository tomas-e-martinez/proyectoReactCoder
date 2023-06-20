import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Descripcion = ({text}) => {
  return <p>{text}</p>
}

const Titulo = ({text}) => {
  return <h1>{text}</h1>
}

const Card = () => {
  return <div>
    <Titulo text="Esto es un título"/>
    <Descripcion text="Esto es una descripción"/>
    </div>
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_River_Plate.png/800px-Logo_River_Plate.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Boca_escudo.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <Card/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

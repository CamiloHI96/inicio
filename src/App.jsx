import { useState } from 'react'
import Inicio from './components/inicio'
import Init from './components/init'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let nombre="camilo"

  return (
    <>
      {/* <Inicio dato={nombre}></Inicio>
      <Inicio dato="lllll"></Inicio>
      <Inicio dato="xxxxx"></Inicio>
      <button variant="primary">hola</button>
      <button class="btn btn-primary">Primary button</button> */}
      <Init></Init>
    </>
  )
}

export default App

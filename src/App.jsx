import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Banner
      Texto={"Filmes, séries e muito"}
      Br={"mais, sem limites"}
      SubTexto={"A partir de R$ 20,90. Cancele quando quiser."}
    />
    <Form
        TextForm={"Quer assistir? Informe seus dados para criar ou reiniciar sua assinatura."}
    />
    </>
  )
}

export default App

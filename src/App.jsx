import { useState } from 'react'
//import Datos from './components/datos'
import AppClima from './components/AppClima'
import { ClimaProvider } from './context/ClimaProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <ClimaProvider>
        <header>
          <h1>Buscador de CLima</h1>
        </header>
        <AppClima/>
      </ClimaProvider>
    </div>
  )
}

export default App

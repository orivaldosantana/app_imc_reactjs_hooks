import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Header from './components/header'

function App() {
  const [result, setResult] = useState('')

  const updateResult = r => {
    setResult(r)
  }

  return (
    <div className="App">
      <Header title="Cálculo do IMC" />
      <div className="Body">
        <Form handleResult={updateResult} />
        <p>Resultado: {result.toFixed(2)} </p>
      </div>
    </div>
  )
}

export default App

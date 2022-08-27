import './App.css'
import Form from './components/form'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header title="Cálculo do IMC" />
      <div className="Body">
        <Form />
      </div>
    </div>
  )
}

export default App

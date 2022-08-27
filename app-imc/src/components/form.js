import { useState } from 'react'

const Form = () => {
  const [mass, setMass] = useState('')
  const [height, setHeight] = useState('')
  return (
    <div className="Form">
      <form>
        <label>Massa:</label>
        <input
          type="number"
          value={mass}
          required
          onChange={e => {
            console.log(e.target.value)
            setMass(e.target.value)
          }}
        />
        <label>Altura:</label>
        <input
          type="number"
          required
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Form

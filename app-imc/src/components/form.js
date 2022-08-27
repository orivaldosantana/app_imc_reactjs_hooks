const Form = () => {
  return (
    <div className="Form">
      <form>
        <label>Massa: </label>
        <input type="number" required value="0" />
        <label>Altura: </label>
        <input type="number" required value="0" />
      </form>
    </div>
  )
}

export default Form

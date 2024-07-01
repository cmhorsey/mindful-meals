import NavBar from "./NavBar"
import Form from "./Form"

function FoodLog() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1>Food Log</h1>
        <Form />
      </div>
    </>
  )
}

export default FoodLog

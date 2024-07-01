import NavBar from "./NavBar"
import Form from "./Form"

import React, { useState, useEffect } from "react"

function FoodLog() {
  const [food, setFood] = useState([])

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

import NavBar from "./NavBar"
import Form from "./Form"

import React, { useState, useEffect } from "react"
import Table from "./Table"

function FoodLog() {
  const [allMeals, setAllMeals] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => setAllMeals(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1>Food Log</h1>
        <Form />
        <br></br>
        <Table allMeals={allMeals} />
      </div>
    </>
  )
}

export default FoodLog

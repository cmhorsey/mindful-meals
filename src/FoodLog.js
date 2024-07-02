import NavBar from "./NavBar"
import Form from "./Form"

import React, { useState, useEffect } from "react"
import Table from "./Table"

function FoodLog() {
  const [allMeals, setAllMeals] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => setAllMeals(data))
  }, [fetchTrigger])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1>Meal Log</h1>
        <Form fetchTrigger={toggleFetchTrigger} />
        <br></br>
        <Table allMeals={allMeals} />
      </div>
    </>
  )
}

export default FoodLog

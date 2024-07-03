import NavBar from "./NavBar"
import Form from "./Form"
import React, { useState, useEffect } from "react"
import Table from "./Table"
import { getMeals } from "../utilities/api"

function MealLog() {
  const [allMeals, setAllMeals] = useState([])

  const fetchMeals = () => {
    getMeals().then((data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
      setAllMeals(sortedData)
    })
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1>Meal Log</h1>
        <Form fetchMeals={fetchMeals} />
        <br />
        <Table allMeals={allMeals} />
      </div>
    </>
  )
}

export default MealLog

import NavBar from "./NavBar"
import Form from "./Form"

import React, { useState, useEffect } from "react"

function FoodLog() {
  const [food, setFood] = useState([])
  const breakfast = "eggs "
  const lunch = " cobb salad"
  const dinner = " spaghetti"
  const query = breakfast + lunch + dinner

  // useEffect(() => {
  //   fetch("https://api.calorieninjas.com/v1/nutrition?query=" + query, {
  //     method: "GET",
  //     headers: {
  //       "X-Api-Key": "jrQyEj+ffbtZSdfVrr8HJQ==V3J3FdNbQrPL65DI",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  // }, [])

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

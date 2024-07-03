import NavBar from "./NavBar"
import Form from "./Form"
import React, { useState, useEffect } from "react"
import Table from "./Table"
import { getMeals, fetchNutritionData, postMealData } from "../utilities/api"

const initialFormState = {
  date: new Date(),
  breakfast: "",
  lunch: "",
  dinner: "",
}

function MealLog() {
  const [allMeals, setAllMeals] = useState([])
  const [formData, setFormData] = useState(initialFormState)
  const [newFood, setNewFood] = useState([])

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

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { breakfast, lunch, dinner } = formData
    const query = `${breakfast} ${lunch} ${dinner}`

    fetchNutritionData(query).then((data) => {
      const extractedData = data.items.map((item) => ({
        name: item.name,
        calories: item.calories,
        carbohydrates: item.carbohydrates_total_g,
      }))
      setNewFood(extractedData)
      handlePost(extractedData)
    })
  }

  const handlePost = (extractedData) => {
    const totalCalories = extractedData.reduce(
      (sum, item) => sum + item.calories,
      0
    )
    const totalCarbs = extractedData.reduce(
      (sum, item) => sum + item.carbohydrates,
      0
    )

    const mealData = {
      date: formData.date.toLocaleDateString(),
      food: [formData.breakfast, formData.lunch, formData.dinner],
      calories: Math.floor(totalCalories * 4),
      carbs: Math.floor(totalCarbs * 4),
    }

    postMealData(mealData).then(() => {
      fetchMeals()
      setFormData(initialFormState)
    })
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1>Meal Log</h1>
        <Form
          formData={formData}
          onFormChange={handleFormChange}
          onHandleDateChange={handleDateChange}
          onHandleSubmit={handleSubmit}
        />
        <br />
        <Table allMeals={allMeals} />
      </div>
    </>
  )
}

export default MealLog

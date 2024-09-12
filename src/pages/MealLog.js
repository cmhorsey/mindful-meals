import NavBar from "../components/NavBar"
import Form from "../components/meal-log/Form"
import React, { useState, useEffect } from "react"
import Table from "../components/meal-log/Table"
import {
  getMeals,
  fetchNutritionData,
  postMealData,
  deleteMealData,
} from "../utilities/api"

function MealLog() {
  const [allMeals, setAllMeals] = useState([])

  const sortData = (data) => {
    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date))
    setAllMeals(sortedData)
  }

  const fetchMeals = () => getMeals().then(sortData)

  const handleDelete = (id) => {
    deleteMealData(id).then(() => fetchMeals())
  }

  const handleSubmitForm = (formData) => {
    const { breakfast, lunch, dinner } = formData
    const query = `${breakfast} ${lunch} ${dinner}`

    fetchNutritionData(query).then((data) => {
      const extractedData = data.items.map((item) => ({
        calories: item.calories,
        carbohydrates: item.carbohydrates_total_g,
      }))
      handlePost(extractedData, formData)
    })
  }

  const totalCalories = (data) => {
    const calories = data.reduce((sum, item) => sum + item.calories, 0)
    return Math.floor(calories * 4)
  }

  const totalCarbs = (data) => {
    const carbs = data.reduce((sum, item) => sum + item.carbohydrates, 0)
    return Math.floor(carbs * 4)
  }

  const handlePost = (data, formData) => {
    const mealData = {
      date: formData.date.toLocaleDateString(),
      food: [formData.breakfast, formData.lunch, formData.dinner],
      calories: totalCalories(data),
      carbs: totalCarbs(data),
    }

    postMealData(mealData).then(() => {
      fetchMeals()
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
        <Form onSubmitForm={handleSubmitForm} />
        <br />
        <Table allMeals={allMeals} onDelete={handleDelete} />
      </div>
    </>
  )
}

export default MealLog

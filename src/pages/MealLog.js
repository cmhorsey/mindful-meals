import NavBar from "../components/NavBar"
import Form from "../components/Form"
import React, { useState, useEffect } from "react"
import Table from "../components/Table"
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

  const sortData = (data) => {
    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date))
    setAllMeals(sortedData)
  }

  const fetchMeals = () => getMeals().then(sortData)

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
        calories: item.calories,
        carbohydrates: item.carbohydrates_total_g,
      }))
      handlePost(extractedData)
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

  const handlePost = (data) => {
    const mealData = {
      date: formData.date.toLocaleDateString(),
      food: [formData.breakfast, formData.lunch, formData.dinner],
      calories: totalCalories(data),
      carbs: totalCarbs(data),
    }

    postMealData(mealData).then(() => {
      fetchMeals()
      setFormData(initialFormState)
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
        <Form
          formData={formData}
          onFormChange={handleFormChange}
          onHandleDateChange={handleDateChange}
          onSubmitForm={handleSubmit}
        />
        <br />
        <Table allMeals={allMeals} />
      </div>
    </>
  )
}

export default MealLog

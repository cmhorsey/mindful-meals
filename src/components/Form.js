import React, { useState } from "react"
import CustomDatePicker from "./CustomDatePicker"
import { fetchNutritionData, postMealData } from "../utilities/api"
import "../styles/index.css"

const initialValue = {
  date: new Date(),
  breakfast: "",
  lunch: "",
  dinner: "",
}

function Form({ fetchMeals }) {
  const [formData, setFormData] = useState(initialValue)
  const [newFood, setNewFood] = useState([])

  const breakfast = formData.breakfast
  const lunch = formData.lunch
  const dinner = formData.dinner
  const query = `${breakfast} ${lunch} ${dinner}`

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date })
  }

  function handleSubmit(event) {
    event.preventDefault()

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

  function handlePost(extractedData) {
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
      food: [breakfast, lunch, dinner],
      calories: Math.floor(totalCalories * 4),
      carbs: Math.floor(totalCarbs * 4),
    }

    postMealData(mealData).then(() => {
      fetchMeals()
      setFormData(initialValue) // Reset form after successful submission
    })
  }

  return (
    <form onSubmit={handleSubmit} className="container form-container">
      <h2 className="form-header">Add Meals</h2>
      <CustomDatePicker
        selectedDate={formData.date}
        handleDateChange={handleDateChange}
      />
      <div className="mb-3">
        <label htmlFor="breakfast" className="form-label">
          Breakfast
        </label>
        <input
          type="text"
          className="form-control"
          id="breakfast"
          name="breakfast"
          value={formData.breakfast}
          onChange={handleFormChange}
          placeholder="What did you have for breakfast?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lunch" className="form-label">
          Lunch
        </label>
        <input
          type="text"
          className="form-control"
          id="lunch"
          name="lunch"
          value={formData.lunch}
          onChange={handleFormChange}
          placeholder="What did you have for lunch?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dinner" className="form-label">
          Dinner
        </label>
        <input
          type="text"
          className="form-control"
          id="dinner"
          name="dinner"
          value={formData.dinner}
          onChange={handleFormChange}
          placeholder="What did you have for dinner?"
        />
      </div>
      <button type="submit" className="btn btn-secondary btn-submit">
        Submit
      </button>
    </form>
  )
}

export default Form

import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./index.css"

const initialValue = {
  date: new Date(),
  breakfast: "",
  lunch: "",
  dinner: "",
}

function Form({ fetchTrigger }) {
  const [formData, setFormData] = useState(initialValue)
  const [newFood, setNewFood] = useState([])

  const breakfast = formData.breakfast
  const lunch = formData.lunch
  const dinner = formData.dinner
  const query = `${breakfast} ${lunch} ${dinner}`

  function handleChange(event) {
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

    fetch("https://api.calorieninjas.com/v1/nutrition?query=" + query, {
      method: "GET",
      headers: {
        "X-Api-Key": "jrQyEj+ffbtZSdfVrr8HJQ==V3J3FdNbQrPL65DI",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
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
      carbs: totalCarbs * 4,
    }

    fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealData),
    }).then(fetchTrigger)
  }

  return (
    <form onSubmit={handleSubmit} className="container form-container">
      <h2 className="form-header">Add Meals</h2>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          className="form-control"
          dateFormat="MM/dd/yyyy"
        />
      </div>
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          placeholder="What did you have for dinner?"
        />
      </div>
      <button type="submit" className=" btn btn-secondary btn-submit">
        Submit
      </button>
    </form>
  )
}

export default Form

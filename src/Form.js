import React, { useState } from "react"

const initialValue = {
  breakfast: "",
  lunch: "",
  dinner: "",
}

function Form({ handleChange }) {
  const [formData, setFormData] = useState(initialValue)

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

  function handleSubmit(event) {
    event.preventDefault()
    console.log(query)
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
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
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Form

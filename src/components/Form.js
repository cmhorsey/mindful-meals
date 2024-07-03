import React from "react"
import CustomDatePicker from "./CustomDatePicker"
import "../styles/index.css"

function Form({ formData, onFormChange, onHandleDateChange, onHandleSubmit }) {
  return (
    <form onSubmit={onHandleSubmit} className="container form-container">
      <h2 className="form-header">Add Meals</h2>
      <CustomDatePicker
        selectedDate={formData.date}
        onHandleDateChange={onHandleDateChange}
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
          onChange={onFormChange}
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
          onChange={onFormChange}
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
          onChange={onFormChange}
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

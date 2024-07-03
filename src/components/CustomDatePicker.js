import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function CustomDatePicker({ selectedDate, onHandleDateChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="date" className="form-label">
        Date
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={onHandleDateChange}
        className="form-control"
        dateFormat="MM/dd/yyyy"
      />
    </div>
  )
}
export default CustomDatePicker

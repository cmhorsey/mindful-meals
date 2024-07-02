import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function CustomDatePicker({ selectedDate, handleDateChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="date" className="form-label">
        Date
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="form-control"
        dateFormat="MM/dd/yyyy"
      />
    </div>
  )
}
export default CustomDatePicker

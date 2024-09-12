import React from "react"
import CustomDatePicker from "../CustomDatePicker"
import "../../styles/index.css"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface FormProps {
  // formData: FormData
  // onHandleDateChange: () => void
  // onSubmitForm: (values: FormValues) => void
  // onFormChange: () => void
}

type FormValues = {
  date: Date
  breakfast: string
  lunch: string
  dinner: string
}

function Form({}): FormProps {
  const form = useForm<FormValues>({
    defaultValues: {
      date: new Date(),
    },
    mode: "onBlur",
  })

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = form
  const {} = formState

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data)
  }

  return (
    <div>
      <form
        className="container form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="form-header">Add Meals</h2>

        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
            })}
          />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="breakfast" className="form-label">
            Breakfast
          </label>
          <input
            type="text"
            className="form-control"
            id="breakfast"
            name="breakfast"
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
            placeholder="What did you have for dinner?"
          />
        </div> */}

        <button type="submit" className="btn btn-secondary btn-submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default Form

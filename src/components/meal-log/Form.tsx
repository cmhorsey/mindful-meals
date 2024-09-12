import React from "react"
import "../../styles/index.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

interface FormProps {
  onSubmitForm: (data: FormValues) => void
}

type FormValues = {
  date: Date
  breakfast: string
  lunch: string
  dinner: string
}

function Form({ onSubmitForm }: FormProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      date: new Date(),
    },
    mode: "onBlur",
  })

  const { register, control, handleSubmit } = form

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmitForm(data)
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

        <div className="mb-3">
          <label htmlFor="breakfast" className="form-label">
            Breakfast
          </label>
          <input
            type="text"
            className="form-control"
            id="breakfast"
            placeholder="What did you have for breakfast?"
            {...register("breakfast")}
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
            placeholder="What did you have for lunch?"
            {...register("lunch")}
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
            placeholder="What did you have for dinner?"
            {...register("dinner")}
          />
        </div>

        <button type="submit" className="btn btn-secondary btn-submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default Form

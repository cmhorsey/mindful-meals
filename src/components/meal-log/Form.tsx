import React from "react"
import { useEffect } from "react"
import "../../styles/index.css"
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form"
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

  const { register, control, handleSubmit, formState, reset } = form
  const { errors, isSubmitSuccessful } = formState

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmitForm(data)
  }

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors", errors)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <div>
      <form
        className="container form-container"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <h2 className="form-header">Add Meals</h2>

        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
              required: "Date is required",
            })}
          />
          <p className="error">{errors.date?.message} </p>
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
            {...register("breakfast", {
              required: {
                value: true,
                message: "Please enter your breakfast",
              },
            })}
          />
          <p className="error">{errors.breakfast?.message} </p>
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
            {...register("lunch", {
              required: {
                value: true,
                message: "Please enter your lunch",
              },
            })}
          />{" "}
          <p className="error">{errors.lunch?.message} </p>
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
            {...register("dinner", {
              required: {
                value: true,
                message: "Please enter your dinner",
              },
            })}
          />
          <p className="error">{errors.dinner?.message} </p>
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

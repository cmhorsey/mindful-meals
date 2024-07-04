const API_KEY = "jrQyEj+ffbtZSdfVrr8HJQ==V3J3FdNbQrPL65DI"

export const fetchNutritionData = (query) => {
  return fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
}

export const postMealData = (mealData) => {
  return fetch("http://localhost:3000/meals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mealData),
  })
}

export const getMeals = () => {
  return fetch("http://localhost:3000/meals").then((response) =>
    response.json()
  )
}

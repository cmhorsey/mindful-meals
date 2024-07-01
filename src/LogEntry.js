function LogEntry({ meal }) {
  const { food, calories, carbs, date } = meal
  return (
    <tr>
      <th scope="row">{date}</th>
      <td>
        Breakfast : {food[0]}
        <br></br>
        Lunch : {food[1]}
        <br></br>
        Dinner : {food[2]}
      </td>
      <td>
        Calories: {calories}
        <br></br>
        Carbs: {carbs}
      </td>
      <td></td>
    </tr>
  )
}

export default LogEntry

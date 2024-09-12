function LogEntry({ meal, onDelete }) {
  const { food, calories, carbs, date, id } = meal
  return (
    <tr>
      <th scope="row">{date}</th>
      <td>
        Breakfast : {food[0]}
        <br />
        Lunch : {food[1]}
        <br />
        Dinner : {food[2]}
      </td>
      <td>
        Calories: {calories}
        <br />
        Carbs: {carbs}
      </td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default LogEntry

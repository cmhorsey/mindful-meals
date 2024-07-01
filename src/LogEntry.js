function LogEntry({ meal }) {
  const { food, calories, carbs } = meal
  return (
    <tr>
      <th scope="row">1</th>
      <td>{food}</td>
      <td>{calories}</td>
      <td>{carbs}</td>
    </tr>
  )
}

export default LogEntry

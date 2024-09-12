import LogEntry from "./LogEntry"

function Table({ allMeals, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">date</th>
          <th scope="col">meals</th>
          <th scope="col">nutritional info</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        {allMeals.map((meal) => {
          return <LogEntry key={meal.id} meal={meal} onDelete={onDelete} />
        })}
      </tbody>
    </table>
  )
}

export default Table

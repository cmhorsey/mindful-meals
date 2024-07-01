import { all } from "q"
import LogEntry from "./LogEntry"

function Table({ allMeals }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">date</th>
          <th scope="col">meals</th>
          <th scope="col">nutritional info </th>
          <th scope="col">notes</th>
        </tr>
      </thead>
      <tbody>
        {allMeals.map((meal) => {
          return <LogEntry key={meal.id} meal={meal} />
        })}
      </tbody>
    </table>
  )
}

export default Table

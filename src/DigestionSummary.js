function DigestionSummary() {
  return (
    <div className="bg-light text-dark p-3 rounded">
      <h4 className="mb-3">Summary of Changes:</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Time</th>
            <th>Blood Sugar</th>
            <th>Overall Digestion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phase 1 - Postprandial Phase</td>
            <td>0-4 hours</td>
            <td>High due to food intake.</td>
            <td>Active digestion and nutrient absorption.</td>
          </tr>
          <tr>
            <td>Phase 2 - Early Fasting Phase</td>
            <td>4-8 hours</td>
            <td>Gradual decline as glucose is absorbed.</td>
            <td>Completion of digestion and nutrient absorption.</td>
          </tr>
          <tr>
            <td>Phase 3 - Glycogen Utilization Phase</td>
            <td>8-12 hours</td>
            <td>Decline as glycogen is used.</td>
            <td>Inactive digestion, shift to internal energy stores.</td>
          </tr>
          <tr>
            <td>Phase 4 - Fat-Burning Phase</td>
            <td>12-16 hours</td>
            <td>Stabilizes at a lower level as fat metabolism begins.</td>
            <td>Inactive digestion, shift to internal energy stores.</td>
          </tr>
          <tr>
            <td>Fast Complete</td>
            <td>16+ hours</td>
            <td>Stable, low level.</td>
            <td>Continued use of fat stores.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DigestionSummary

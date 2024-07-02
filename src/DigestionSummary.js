function DigestionSummary() {
  return (
    <div className="bg-light text-dark p-3 rounded">
      <h4 className="mb-3">Summary of Changes:</h4>
      <div className="mb-3">
        <h5>Blood Sugar:</h5>
        <ul>
          <li>0-4 hours: High due to food intake.</li>
          <li>4-8 hours: Gradual decline as glucose is absorbed.</li>
          <li>8-12 hours: Decline as glycogen is used.</li>
          <li>
            12-16 hours: Stabilizes at a lower level as fat metabolism begins.
          </li>
        </ul>
      </div>
      <div>
        <h5>Overall Digestion:</h5>
        <ul>
          <li>0-4 hours: Active digestion and nutrient absorption.</li>
          <li>4-8 hours: Completion of digestion and nutrient absorption.</li>
          <li>
            8-16 hours: Inactive digestion, shift to internal energy stores.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DigestionSummary

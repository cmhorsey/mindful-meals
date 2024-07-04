import NavBar from "../components/NavBar"
import Timer from "../components/fast-tracker/Timer"

function FastTracker() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container">
        <h1 className="form-header">Fast Tracker</h1>
        <div className="mb-3">
          <Timer />
        </div>
      </main>
    </>
  )
}

export default FastTracker

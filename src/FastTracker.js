import NavBar from "./NavBar"
import Timer from "./Timer"

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

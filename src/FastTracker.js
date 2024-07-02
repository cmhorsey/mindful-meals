import NavBar from "./NavBar"
import Timer from "./Timer"

function FastTracker() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container">
        <h1>This is my fast tracker!</h1>
        <Timer />
      </main>
    </>
  )
}

export default FastTracker

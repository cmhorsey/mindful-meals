function TimeCreator({
  seconds,
  setSeconds,
  timerID,
  setTimerID,
  handleStopTimer,
}) {
  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds + 1)
  }

  function handleStartTimer() {
    if (!timerID) {
      const id = setInterval(tick, 1000)
      setTimerID(id)
    }
  }

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mb-4">{formatTime()}</h1>
      <div className="mb-3">
        <button className="btn btn-secondary me-2" onClick={handleStartTimer}>
          Start Fast
        </button>
        <button className="btn btn-secondary" onClick={handleStopTimer}>
          End Fast
        </button>
      </div>
    </div>
  )
}

export default TimeCreator

interface TimerProps {
  seconds: number
  timerID: ReturnType<typeof setInterval> | null
  onStopTimer: () => void
  message: string
  setSeconds: React.Dispatch<React.SetStateAction<number>>
  setTimerID: React.Dispatch<
    React.SetStateAction<ReturnType<typeof setInterval> | null>
  >
}

function TimerCreator({
  seconds,
  setSeconds,
  timerID,
  setTimerID,
  onStopTimer,
}: TimerProps) {
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
        <button className="btn btn-secondary" onClick={onStopTimer}>
          End Fast
        </button>
      </div>
    </div>
  )
}

export default TimerCreator

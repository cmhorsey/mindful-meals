import React, { useState, useEffect } from "react"
import Message from "./Message"

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [timerID, setTimerID] = useState(null)

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds + 1)
  }

  function handleStartTimer() {
    if (!timerID) {
      const id = setInterval(tick, 1000)
      setTimerID(id)
    }
  }

  const handleStopTimer = () => {
    if (timerID) {
      clearInterval(timerID)
      setTimerID(null)
      setSeconds(0)
    }
  }

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="d-flex justify-content-center">
      <h1>{formatTime(seconds)}</h1>
      <div className="mb-3 p-2">
        <button onClick={handleStartTimer}>Start Fast</button>
      </div>

      <div className="mb-3 p-2">
        <button onClick={handleStopTimer}>End Fast</button>
      </div>
      <Message seconds={seconds} handleStopTimer={handleStopTimer} />
    </div>
  )
}

export default Timer

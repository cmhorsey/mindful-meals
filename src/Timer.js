import React, { useState, useEffect } from "react"

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [timerID, setTimerID] = useState(null)

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds + 1)
  }

  const handleStartTimer = () => {
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
    <div>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={handleStartTimer}>Start Fast</button>
      <button onClick={handleStopTimer}>End Fast</button>
    </div>
  )
}

export default Timer

import React, { useState, useEffect } from "react"

function TimeCreator({ seconds, setSeconds, timerID, setTimerID, setMessage }) {
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
      setMessage("")
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
    <div className="d-flex justify-content-center">
      <h1>{formatTime()}</h1>
      <div className="mb-3 p-2">
        <button onClick={handleStartTimer}>Start Fast</button>
      </div>

      <div className="mb-3 p-2">
        <button onClick={handleStopTimer}>End Fast</button>
      </div>
    </div>
  )
}

export default TimeCreator

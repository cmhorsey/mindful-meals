import React, { useState, useEffect } from "react"
import Message from "./Message"
import TimeCreator from "./TimerCreator"

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [message, setMessage] = useState("")
  const [timerID, setTimerID] = useState(null)

  const handleStopTimer = () => {
    if (timerID) {
      clearInterval(timerID)
      setTimerID(null)
      setSeconds(0)
      setMessage("Fast Complete")
    }
  }

  return (
    <div>
      <TimeCreator
        seconds={seconds}
        setSeconds={setSeconds}
        timerID={timerID}
        setTimerID={setTimerID}
        setMessage={setMessage}
        handleStopTimer={handleStopTimer}
      />
      <Message
        seconds={seconds}
        handleStopTimer={handleStopTimer}
        message={message}
        setMessage={setMessage}
      />
    </div>
  )
}

export default Timer

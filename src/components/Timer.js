import React, { useState } from "react"
import Message from "./Message"
import TimerCreator from "./TimerCreator"
import DigestionSummary from "./DigestionSummary"

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
      <TimerCreator
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
      <DigestionSummary />
    </div>
  )
}

export default Timer

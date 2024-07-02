import React, { useState, useEffect } from "react"

function Message({ seconds, handleStopTimer }) {
  const [message, setMessage] = useState("")

  useEffect(() => {
    function handleTimerPhase() {
      if (seconds === 3) {
        setMessage("test")
      } else if (seconds === 5) {
        setMessage("Fast Complete")
        handleStopTimer()
      }
    }
    handleTimerPhase()
  }, [seconds])

  return (
    <div>
      <span>
        <h3>{message}</h3>
      </span>
    </div>
  )
}

export default Message

import React, { useEffect } from "react"

function Message({ seconds, handleStopTimer, message, setMessage }) {
  useEffect(() => {
    function handleTimerPhase() {
      if (seconds >= 1 && seconds < 5) {
        setMessage(" You are currently in Phase 1 ")
      } else if (seconds >= 5 && seconds < 10) {
        setMessage(" You are currently in Phase 2 ")
      } else if (seconds >= 10 && seconds < 15) {
        setMessage(" You are currently in Phase 3 ")
      } else if (seconds >= 15 && seconds < 20) {
        setMessage(" You are currently in Phase 4 ")
      } else if (seconds === 20) {
        handleStopTimer()
      }
    }
    handleTimerPhase()
  }, [seconds])

  return (
    <div className="d-flex justify-content-center mt-4">
      <span className="bg-secondary text-light rounded">
        <h3 className="m-0">{message}</h3>
      </span>
    </div>
  )
}

export default Message

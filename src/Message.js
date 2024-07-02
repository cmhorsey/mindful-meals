import React, { useEffect } from "react"

function Message({ seconds, handleStopTimer, message, setMessage }) {
  // Hour 0-4: Postprandial Phase seconds 1-14,400
  // Hour 4-8: Early Fasting Phase seconds 14,401 - 28,800
  // Hour 8-12: Glycogen Utilization Phase 28,801 - 43,200
  // Hour 12-16: Fat-Burning Phase 43,2001 - 57,600

  useEffect(() => {
    function handleTimerPhase() {
      if (seconds >= 1 && seconds < 5) {
        setMessage(" Phase 1 - Postprandial Phase ")
      } else if (seconds >= 5 && seconds < 10) {
        setMessage(" Phase 2 - Early Fasting Phase ")
      } else if (seconds >= 10 && seconds < 15) {
        setMessage(" Phase 3 - Glycogen Utilization Phase ")
      } else if (seconds >= 15 && seconds < 20) {
        setMessage(" Phase 4 - Fat-Burning Phase ")
      } else if (seconds === 20) {
        handleStopTimer()
      }
    }
    handleTimerPhase()
  }, [seconds])

  return (
    <div className="d-flex justify-content-center mt-4">
      <span className=" bg-secondary text-light rounded">
        <h3 className="m-0">{message}</h3>
      </span>
    </div>
  )
}

export default Message

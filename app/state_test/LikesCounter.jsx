import React, { useState } from "react"
import LocalDetails from "./LocalDetails"

function LikesCounter({ count, handleLike }) {
  const [localNumber, setLocalNumber] = useState(18)

  function increaseLocalNumber() {
    setLocalNumber(localNumber + 1)
  }

  function decreaseLocalNumber() {
    setLocalNumber(localNumber - 1)
  }

  return (
    <div className="border-2 border-red-400 text-center m-4">
      <div>LikesCounter: {count}</div>
      <button className="border-2 p-4 m-2" onClick={handleLike}>
        Like !
      </button>
      <LocalDetails
        value={localNumber}
        increaseLocalNumber={increaseLocalNumber}
        decreaseLocalNumber={decreaseLocalNumber}
      />
    </div>
  )
}

export default LikesCounter

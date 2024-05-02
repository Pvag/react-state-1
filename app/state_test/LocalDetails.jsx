import React from "react"

function LocalDetails({ value, increaseLocalNumber, decreaseLocalNumber }) {
  return (
    <>
      <div>LocalDetails: {value}</div>
      <button onClick={increaseLocalNumber}>+</button>
      <button onClick={decreaseLocalNumber}>-</button>
    </>
  )
}

export default LocalDetails

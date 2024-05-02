import React from "react"

function Padre({ titolo, testo }) {
  return (
    <div>
      <h1>{titolo}</h1>
      <p>{testo}</p>
    </div>
  )
}

export default Padre

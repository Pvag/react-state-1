"use client"
import React, { useState } from "react"

function Citofono({ count, setCount }) {
  function updateCount() {
    console.log("update count called !")
    setCount(count + 1)
  }

  return (
    <div className="citofono">
      <h2>Questo e' un citofono</h2>
      <button onClick={updateCount}>Ring !</button>
      <p>
        Suonato <span>{count}</span> volte.
      </p>
    </div>
  )
}

export default Citofono

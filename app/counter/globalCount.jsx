import React from "react"

function GlobalCount({ count: clicks }) {
  return (
    <div className="global-counter">
      <p>Global counter: {clicks} clicks.</p>
    </div>
  )
}

export default GlobalCount

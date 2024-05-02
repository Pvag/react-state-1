"use client"

import React from "react"

function contacts() {
  const name = "Mastrantonio"

  function hello() {
    console.log("Hello", name)
  }

  return (
    <div>
      <h1>Contacts</h1>
      <button
        className="bg-white text-black p-1 rounded-md m-3"
        onClick={hello}
      >
        Clg Hello
      </button>
    </div>
  )
}

export default contacts

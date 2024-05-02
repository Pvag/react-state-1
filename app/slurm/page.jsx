"use client"
import React, { useMemo, useState } from "react"
import FruitShop from "./FruitShop"

function Slurm() {
  const [likes, setLikes] = useState(0)
  const [pref, setPref] = useState(18)
  const [mangos, setMangos] = useState(10)

  function addLike() {
    setLikes(likes + 1)
  }

  function cambiaNumeroPreferito() {
    setPref(100)
  }

  function renderFruitShop() {
    return <FruitShop mangos={mangos} />
  }

  function buyMango() {
    setMangos(mangos - 1)
  }

  const memoFruitShop = useMemo(() => <FruitShop mangos={mangos} />, [mangos])

  console.log("Slurm Component was just Rendered! Number of likes:", likes)
  console.log("Numero preferito:", pref)

  return (
    <>
      <div className="slurm">
        <h1>Slurm</h1>
      </div>
      <div className="card border-4 border-white">
        <h1>Agostino</h1>
        <p className="counter">Likes: {likes}</p>

        <button
          className="m-4 bg-slate-500 p-4 rounded-xl shadow-lg shadow-green-100/70"
          onClick={addLike}
        >
          Like!
        </button>
        <button
          className="m-4 bg-slate-500 p-4 rounded-xl shadow-lg shadow-green-100/70"
          onClick={cambiaNumeroPreferito}
        >
          Nr.Pref.
        </button>
        <button
          className="m-4 bg-slate-500 p-4 rounded-xl shadow-lg shadow-green-100/70"
          onClick={buyMango}
        >
          Buy Mango
        </button>
      </div>
      {memoFruitShop}
    </>
  )
}

export default Slurm

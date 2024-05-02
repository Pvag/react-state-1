"use client"

import React, { useState } from "react"
import LikesCounter from "./LikesCounter"
import Padre from "./Padre"

function Ciao() {
  const [likes1, setLikes1] = useState(0)
  const [likes2, setLikes2] = useState(0)

  // questo non aggiornera' la UI ! Perche' non e' nello state! (v. log in console)
  //   let myLikes = 0

  const DEFAULT_BG = "bg-zinc-400"
  const [myLikes, setMyLikes] = useState(0)
  const [bkg, setBkg] = useState(DEFAULT_BG)

  function increaseMyLikes() {
    // myLikes = myLikes + 1
    setMyLikes(myLikes + 1) // QUESTO aggiornera' la UI !
    console.log(myLikes)
  }

  function handleLike1() {
    setLikes1(likes1 + 1)
  }

  function handleLike2() {
    setLikes2(likes2 + 1)
  }

  function handleHover() {
    setBkg("bg-zinc-100")
  }

  function handleLeave() {
    setBkg(DEFAULT_BG)
  }

  console.log("Ciao was Rendered!")

  return (
    <>
      <h1>App</h1>
      --my likes-
      <p>My likes: {myLikes}</p>
      <button onClick={increaseMyLikes}>+ my likes</button>
      <br />
      --likes counter-
      <LikesCounter count={likes1} handleLike={handleLike1} />
      <LikesCounter count={likes2} handleLike={handleLike2} />
      <br />
      --padre-
      <Padre titolo="heading2 di padre" testo="paragrafo di padre" />
      <div className="border-2 border-green-400 m-10 bg-zinc-400">
        Total likes: {likes1 + likes2}
      </div>
      <div
        className={`${bkg} m-4 p-3 text-red-800 w-24 text-center`}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        COOL
      </div>
    </>
  )
}

export default Ciao

"use client"
import React, { useCallback, useEffect, useState } from "react"
import Citofono from "@/app/counter/citofono"
import GlobalCount from "@/app/counter/globalCount"

function Counter() {
  function updateCount() {
    setGlobalCount(count1 + count2 + count3 + count4)
  }

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  const [globalCount, setGlobalCount] = useState(0)

  useEffect(updateCount, [count1, count2, count3, count4])

  return (
    <div className="citofoni">
      <h1>
        Citofono <span>Ring</span> Counters
      </h1>
      <Citofono count={count1} setCount={setCount1} />
      <Citofono count={count2} setCount={setCount2} />
      <Citofono count={count3} setCount={setCount3} />
      <Citofono count={count4} setCount={setCount4} />
      <GlobalCount count={globalCount} />
    </div>
  )
}

export default Counter

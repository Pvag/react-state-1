import React from "react"

function FruitShop({ mangos }) {
  console.log("FruitShop was rendered, with", mangos, "mangos")
  return <div>FruitShop has {mangos} mangos.</div>
}

export default FruitShop

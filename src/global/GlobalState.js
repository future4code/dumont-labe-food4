import React, { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  const updateTotal = (itemPrice, itemAmount, isAdding) => {
    let total=subtotal
    isAdding ? total+= itemPrice*itemAmount : total-= itemPrice*itemAmount
    setSubtotal(total)
  }

  const data = {cart, setCart, subtotal, setSubtotal, updateTotal}

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
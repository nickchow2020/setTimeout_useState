import React from "react";

const Button = ({addCounter,subtractCounter,handleAlert})=>{

  return(
    <>
      <button onClick={addCounter}>add</button>
      <button onClick={subtractCounter}>subtract</button>
      <button onClick={handleAlert}>Alert after 5s</button>
    </>
  )
}


export default Button
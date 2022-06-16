import React ,{ useState }from "react";
import Button from "./Button";
const Counter = ()=>{

  const [counter,setCounter] = useState(0);

  const addCounter = ()=>{
    setCounter(counter + 1)
  };

  const subtractCounter = ()=>{
    setCounter(counter - 1)
  };

  const handleAlert = () =>{
    setTimeout(() => {
      setCounter((prevValue) => {
        console.log("hello",prevValue)
        alert(prevValue)
      })
    }, 5000)
  }

  return(
    <>
      <h1>Counter: {counter}</h1>
      <Button 
      addCounter={addCounter} 
      subtractCounter={subtractCounter}
      handleAlert={handleAlert}
      />
    </>
  )
}


export default Counter

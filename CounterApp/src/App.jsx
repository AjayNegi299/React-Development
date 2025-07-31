import { useState } from 'react';
import './App.css'

function CounterApp(){
let [Counter, setCounter] = useState(15)
// function addValue(){
//   setCounter(Counter + 1)
// }
  return(
    <>
    <h1>Hello react {Counter}</h1>
    <h2>{Counter}</h2>
    <button onClick={()=>{(Counter < 20)? setCounter(Counter + 1):alert(`Number should be less then ${Counter}`)}}>Increase{Counter}</button>
    <br />
    <button onClick={()=>{(Counter> 0)? setCounter(Counter - 1):alert(`Number should be greather then ${Counter}`)}}>decrease {Counter}</button>

    </>
  )
}

export default CounterApp
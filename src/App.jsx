import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const[input,setInput]=useState('');
  const[isLeap,setIsLeap]=useState('');

  const findLeap =()=>{
    if( input%100 == 0 && input%400 == 0){
      setIsLeap('Leap year');
     
    }
    else if(input%4 == 0 && input%100 != 0){
      setIsLeap('Leap year');
     
    }
    else{
    setIsLeap('Not a leap year');
      
    }
   
  }


  return(
    <div>
      <h1>finding leap year</h1>
      <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='enter a year' />
      <button onClick={findLeap}>Check year</button>
      {
        isLeap && <h3>{input} is  {isLeap}</h3>

      }
      
      </div>
  )
}
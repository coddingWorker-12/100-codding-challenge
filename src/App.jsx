import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const[userInput,setUserInput]=useState('');

  useEffect(()=>{
    const latest = localStorage.getItem('inputData')
    if(latest){
      setUserInput(latest);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('inputData',userInput);
  },[userInput]);

  const relodePage = ()=>{
    window.location.reload();
  }





  return(
    <div>
      <h1>for store last user input</h1>
      <input onChange={(e)=>setUserInput(e.target.value)} type="text" defaultValue={userInput} placeholder='enter a value' />
      <button onClick={relodePage }>relode page</button>
    </div>
  )

  
}
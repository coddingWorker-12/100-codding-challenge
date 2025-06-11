import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){
  const[percent,setPercent]=useState();
   const[ispercent,setIsPercent]=useState();

  const ChangeColor= (e)=>setPercent(e.target.value);
  const handelColor =()=>{
    setIsPercent(percent);
  }

  return(
    <div style={{backgroundColor:"lightgrey",width:"100vw",height:"100vh"}}>
      <div>
        <ProgressBar ispercent = {ispercent}/>
      </div>
      <div>
        <input type="text" onChange={ChangeColor} placeholder='enter parcentage' />
        <button onClick={handelColor}>change color</button>
      </div>
    </div>
  )
}
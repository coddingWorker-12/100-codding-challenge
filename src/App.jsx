import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){
  const[ isTrue,setIsTrue]=useState(false);

  const selectAll= ()=>{
    setIsTrue(!isTrue)
  }

  return(
    <div>
      <input type="checkbox"  checked={isTrue} value="HTML"/>
      <label htmlFor="HTML">HTML</label>
      <br /><br />
       <input type="checkbox"  checked={isTrue} value="CSS"/>
      <label htmlFor="CSS">CSS</label>
      <br /><br />
       <input type="checkbox"  checked={isTrue} value="JS"/>
      <label htmlFor="JS">JS</label>
      <br /><br />
      <button onClick={selectAll}>select all</button>

      </div>
  )
}
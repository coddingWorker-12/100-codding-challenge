import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){ 
  
  const [messages, setMessages] = useState(["The minute she landed she understood the reason this was a fly-over state.", "She thought there'd be sufficient time if she hid her watch."]);
  const [inputValue, setInputValue] = useState('');

  const handelKeyDown = (e) => {
   if(e.key === "Enter" && e.shiftKey){
     e.preventDefault();
     if(inputValue.trim() !== ""){
      setMessages((prev)=>[...prev,inputValue]);
      setInputValue('');
     }
   }
  };


  return(
    <div>
      {
        messages.map((message,index)=>(
          <div key={index}>{message}</div>
        ))
      }
      <textarea type="text" onChange={(e)=>setInputValue(e.target.value)} onKeyDown={handelKeyDown} placeholder='after writing text press shift + enter for display' value={inputValue} />
    </div>
  )
   
}

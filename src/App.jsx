import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){
let arr = [1, 2, 3, 4];
const [isFound, setIsFound] = useState(false);
const isInArray = (array,value)=>{
 const item = array.find(item => item === value);
 setIsFound(!!item);
}
useEffect(()=>{
  isInArray(arr,6);
},[]);
return(
  <div>
    {
      isFound?<h1>true</h1>:<h1>false</h1>
    }
  </div>
)

}
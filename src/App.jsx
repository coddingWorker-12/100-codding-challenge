import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){ 

  let  arr = ['orange', 'apple', 'banana', 'pear'];
  let str = 'banana';

  

  function sortStrings(array) {
  for(let i = 0;i<array.length;i++){
    array[i] =  array[i].split('').sort().join('');
    
  }
  
  console.log(array);
}

sortStrings(arr);



}
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){
  let amount = 12345;
  const formateMoney = ()=>{
   const sigh = amount <0 ? '-' : "";
   const fixAmount = Math.abs(amount);
  const format = fixAmount.toLocaleString("en-us",{
    minimumFractionDigits : 2,
    maximumFractionDigits : 2
  });
  const formatedAmount = `${sigh}$${format}`;
  console.log(formatedAmount);
  
  }
  formateMoney();
}
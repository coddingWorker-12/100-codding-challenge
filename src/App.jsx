import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){ 

   const user = {
  firstName: 'John',
 
  lastName: 'Doe'
}

const intialValue = (user)=>{
  if(user.firstName && user.midelName && user.lastName){
    console.log(user.firstName[0],user.middleName[0],user.lastName[0]);

  }
  else if(user.firstName && user.lastName){
    console.log(user.firstName[0],user.lastName[0]);
  }
  else{
    console.log(user.firstName[0])
  }
}

intialValue(user);
}
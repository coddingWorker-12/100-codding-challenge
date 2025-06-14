import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'


export default function App(){
let users = [
  { name: 'John', age: 15 },
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 25 },
];
const findUser = ()=>{
 
 const  user = users.find(user => user.age >= 18);
  console.log(user);
  
}
findUser();

}

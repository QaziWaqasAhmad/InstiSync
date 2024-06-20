import { useEffect, useState } from 'react'
import AppProvider from "./context/index"
import './App.css'
import Home from './constainers/appStack/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './constainers/Login'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import User from './constainers/appStack/User'
import Form1 from './constainers/appStack/forms/Form1'
import Admission from './constainers/appStack/Admission'


function App() {

  


  // useEffect(()=>{
  //   const authToken = localStorage.getItem("users")
  //   if(authToken){
  //    setIsLoggedIn(true)
  //   }
  // },[])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AppProvider>
      {/* {isLoggedIn ? ( */}
        <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form1' element={<Form1/>}/>
      <Route path='/user' element={<User />}/>
      <Route path='/admission' element={<Admission />}/>
    </Routes>
      {/* ):(
      <Navigate to="/" replace/>
      )} */}
    
      
    
    </AppProvider>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import PrivateRoot from './privateRoute'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Vehicle from './pages/vehicle'
import Detail from './pages/detail_vehicles'
import Admin from './pages/admin'




function Routers() {
  

  return (
    <BrowserRouter>
    <Routes>
   
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/vehicle" element={<Vehicle/>} />
        <Route exact path="/detail_vehicle/:id" element={<Detail/>} />
        <Route exact path="/admin" element={<Admin/>} />
       
    </Routes> 
    </BrowserRouter>   
  )
}

export default Routers
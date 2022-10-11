import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Vehicle from './pages/vehicle'
function Routers() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/vehicle" component={Vehicle} />
    </Switch>
    
    </BrowserRouter>   
  )
}

export default Routers
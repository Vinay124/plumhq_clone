import React from "react";
import './Styles/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signin from './Components/Signin'

function App(){
  return (
    <>
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/" component={Home}></Route>
      <Route path="/Login" component={Login}></Route>
      <Route path="/Signin" component={Signin}></Route>
    </Switch>
  </Router>
  </>
  )
}

export default App;

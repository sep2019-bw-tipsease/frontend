import React from 'react';
import Home from './components/Home'
import './App.css';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">

      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
    </div>
  );
}

export default App;


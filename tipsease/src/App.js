import React from 'react';
import Home from './components/Home'
import './App.css';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import PrivateRoute from './utils/PrivateRoute'
import RegisterAsWorker from './components/RegisterAsWorker';
import LoginAsWorker from './components/LoginAsWorker';
import ServerPage from './components/ServerPage';
import WorkerDashboard from './components/WorkerDashboard'

function App() {
  return (
    <div className="App">

      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/loginworker" component={LoginAsWorker} />
      <Route path='/workerreg' component={RegisterAsWorker} />
      <PrivateRoute path='/workerdashboard/:id' component={WorkerDashboard} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/dashboard/:id' component={ServerPage} />
    </div>
  );
}

export default App;


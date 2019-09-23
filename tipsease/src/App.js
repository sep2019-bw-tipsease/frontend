import React from 'react';
import Home from './components/Home'
import './App.css';
import Register from './components/Register';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">


      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default App;

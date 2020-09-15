import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} strict exact />
          <Route path='/view' strict exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

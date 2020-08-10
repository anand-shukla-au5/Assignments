import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Components/login'
import SignUp from './Components/signup'
import Book from './Components/book'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Login} exact strict />
        <Route path="/register" component={SignUp} exact strict />
        <Route path="/home" component={Book} exact strict />
      </div>
    </BrowserRouter>
  );
}

export default App;

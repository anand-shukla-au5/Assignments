import React from 'react';
import './App.css';
import Product from './Component/product'
import Cart from './Component/cart'
import { BrowserRouter, Route } from "react-router-dom";
import Main from './Component/main'
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Main />
      </nav>
      <Route path='/' component={Product} exact strict></Route>
      <Route path='/cart' component={Cart} exact strict></Route>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Userbook from "./Components/Userbook";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" strict exact component={Home} />
          <Route path="/user/:id" component={Userbook} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

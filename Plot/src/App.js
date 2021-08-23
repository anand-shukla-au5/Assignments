import React, { } from "react";
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Login from "./Components/Login";
import Home from "./Components/Home";
import useAuth from './Hooks/useAuth'
import './App.css'
function App() {
  const { loginCredentials, login, logout, auth } = useAuth()

  const PrivateRoute = ({ component: Component, auth }) => {
    return (
      <Route
        exact
        render={(props) =>
          auth ? <Component logout={logout} {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login loginCredentials={loginCredentials} login={login} />
          </Route>
          {auth && <Route path="/home" exact>
            <Home logout={logout} />
          </Route>}
          {auth && <Route path='/' exact>
            <Redirect to='/home' />
          </Route>}
          {!auth && <Route path='/' exact>
            <Redirect to='/login' />
          </Route>}
          {!auth && <Route path='/home' exact>
            <Redirect to='/login' />
          </Route>}
          {/* <PrivateRoute
            path="/"
            isLoggedIn={auth}
            component={Home}
          /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

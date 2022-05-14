import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loginform from './Components/Loginform'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
function App() {
  const [isloggedin, setisloggedin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setisloggedin(true);
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {!isloggedin && <Route path="/login" element={<Loginform setisloggedin={setisloggedin} />} />}
        {isloggedin && <>
          <Route path="/" element={<Dashboard isloggedin={isloggedin} setisloggedin={setisloggedin} />} />
        </>}
        <Route path="*" element={<Navigate to={isloggedin ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios"
import "../style/login.css"

const Login = () => {
    const [password, setPasword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()
    const login = () => {
        if (email !== "" && password !== "") {
            axios({
                method: "post",
                url: "http://localhost:8080/login",
                data: { email, password },
            }).then((res) => {
                console.log("Login res", res);
                localStorage.setItem("auth-token", res.data.token);
                localStorage.setItem("user", res.data.user.email);
                history.push("/home");
            }).catch((err) => {
                setError("User not Found Please Register");
                setPasword("")
                setEmail("")
                console.log("USER Data Not Found plz Register", err);
            });
        }
    }
    return (
        <div className="panel">
            <div className="form">
                <div className="state"><br /><i className="fa fa-unlock-alt"></i><br /><h1>Login</h1></div>
                <input placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" value={password} onChange={(e) => setPasword(e.target.value)} />
                <div onClick={(e) => { e.preventDefault(); login() }} className="login">login</div>
                <div className="fack"><i className="fa fa-question-circle"></i><Link to={'/register'}>Register</Link></div>
                {error !== "" && <p>{error}</p>}
            </div>
        </div>

    );
};

export default Login;
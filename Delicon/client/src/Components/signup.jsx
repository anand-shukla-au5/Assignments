import React, { useState } from 'react';
import "../style/signup.css"
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPasword] = useState("")
    const [cpass, setCpass] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const history = useHistory()
    const register = () => {
        if (cpass === password && name !== "" && email !== "" && password !== "") {
            axios({
                method: "post",
                url: "http://localhost:8080/register",
                data: { name, email, password },
            }).then((res) => {
                console.log("Login res", res);
                if (res.data === "User already Exists") {
                    alert("Already a user, Please Login")
                }
                history.push('/')
            }).catch((err) => {
                console.log(err);
            });
        }
        if (!email.includes('@') && !email.includes('.')) {
            setError("Please include @ and dot in email")
        }
        else {
            setError("Please check the typed fields");
            setPasword("")
            setCpass("")
        }
    }
    console.log(name, password, cpass, email, error)
    return (
        <div className="panel">
            <div className="form">
                <div className="state"><br /><i className="fa fa-unlock-alt"></i><br /><h1>SignUp</h1></div>
                <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" value={password} onChange={(e) => setPasword(e.target.value)} />
                <input placeholder='Confirm Password' type="password" value={cpass} onChange={(e) => setCpass(e.target.value)} />
                <div onClick={(e) => { e.preventDefault(); register() }} className="login">Register</div>
                <div className="fack"><i className="fa fa-question-circle"></i><Link to={'/'}>Already a user</Link></div>
                {error !== "" && <p>{error}</p>}
            </div>
        </div>

    );
};

export default Signup;
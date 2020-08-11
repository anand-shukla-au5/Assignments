import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import '../style/book.css'
import axios from 'axios';
const Book = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [floor, setFloor] = useState("Ground Floor")
    const [people, setPeople] = useState(1)
    const [food, setFood] = useState("")
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")
    const [arr, setArray] = useState([])
    useEffect(() => {
        if (!localStorage.getItem("auth-token")) {
            history.push('/')
        }
        else {
            setEmail(localStorage.getItem("user"))
            setToken(localStorage.getItem("auth-token"))
            let auth = localStorage.getItem("auth-token")
            console.log("ASDAS", auth)
            axios({
                method: 'POST',
                url: 'http://localhost:8080/read',
                data: { email },
                headers: { "auth-token": auth }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    console.log(name, floor, people, food)
    const addResvation = (e) => {
        e.preventDefault()
        const create = async () => {
            try {
                let res = axios({
                    method: 'POST',
                    url: 'http://localhost:8080/create',
                    data: { name, floor, people, food, email },
                    headers: { "auth-token": token }
                })
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        create()
    }
    return (
        <div className="container-fluid">
            <h1 className="text-info">Restaurant Reservation</h1>
            <div className="row">
                <div class="col-md-5 offset-md-0">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Restaurant Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Restaurant name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Floor</label>
                            <select class="form-control" onChange={(e) => setFloor(e.target.value)} >
                                <option>Ground Floor</option>
                                <option>Roof Top</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">No of People</label>
                            <select className="form-control" onChange={(e) => setPeople(e.target.value)} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Food to be Served</label>
                            <textarea className="form-control" onChange={(e) => setFood(e.target.value)} rows="2"></textarea>
                        </div>
                        <button type="submit" onClick={(e) => addResvation(e)} class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;
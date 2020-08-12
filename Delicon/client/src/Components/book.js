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
    const [edit, setEdit] = useState("")
    useEffect(() => {
        if (!localStorage.getItem("auth-token")) {
            history.push('/')
        }
        else {
            let auth = localStorage.getItem("auth-token")
            let email = localStorage.getItem("user")
            console.log("ASDAS", auth)
            axios({
                method: 'POST',
                url: 'http://localhost:8080/read',
                data: { email },
                headers: { "auth-token": auth }
            }).then(res => {
                console.log(res)
                setEmail(localStorage.getItem("user"))
                setToken(localStorage.getItem("auth-token"))
                setArray(res.data.reservation)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [history])

    console.log(name, floor, people, food, arr)
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
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        }
        create()
    }

    const editResvation = (e) => {
        e.preventDefault()
        const editData = async () => {
            try {
                let res = axios({
                    method: 'PUT',
                    url: 'http://localhost:8080/edit',
                    data: { name, floor, people, food, edit },
                    headers: { "auth-token": token }
                })
                console.log(res.data)
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        }
        editData()
    }

    const delReserve = (id) => {
        console.log(id)
        axios({
            method: 'delete',
            url: 'http://localhost:8080/delete',
            data: { id: id },
            headers: { "auth-token": token }
        }).then(res => {
            console.log(res)
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })

    }
    const editReserve = (field) => {
        console.log("Editting")
        setEdit(field._id)
        setName(field.name)
        setPeople(field.people)
        setFloor(field.floor)
        setFood(field.food)
    }
    return (
        <div className="container-fluid mb-5">
            <h1 className="text-info">Restaurant Reservation</h1>
            <div className="row">
                <div class="col-md-5">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Restaurant Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Restaurant name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Floor</label>
                            <select value={floor} class="form-control" onChange={(e) => setFloor(e.target.value)} >
                                <option>Ground Floor</option>
                                <option>Roof Top</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">No of People</label>
                            <select value={people} className="form-control" onChange={(e) => setPeople(e.target.value)} >
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
                            <textarea value={food} className="form-control" onChange={(e) => setFood(e.target.value)} rows="2"></textarea>
                        </div>
                        {edit === "" ? <button type="submit" onClick={(e) => addResvation(e)} class="btn btn-primary">Submit</button> : <button type="submit" onClick={(e) => editResvation(e)} class="btn btn-primary">Edit</button>}
                    </form>
                </div>
                <div className="col-md-6" >
                    {arr && arr.map(el => {
                        return (
                            <div key={el._id} class="media shadow p-3 mb-5 bg-white rounded m-2">
                                <img width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHxpU2ZbovkLf37SqbtpNg1vlk_C_8hBf8YA&usqp=" class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0">Name: {el.name}</h5>
                                    <h6>Food Itme: {el.food}</h6>
                                    <p>No of People : {el.people}</p>
                                </div>
                                <div>
                                    <button onClick={() => editReserve(el)} type="button" class="btn btn-info">Edit</button>
                                    <button onClick={() => { delReserve(el._id) }} type="button" class="btn btn-danger ml-2">Delete</button>
                                    <p className="mt-4">{el.floor}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Book;
import React, { Component } from 'react'
import Tablestocks from './Table'
import axios from 'axios'
import { deleteData } from '../actions/calls'
import Hero from './Hero'
import Nav from './Nav'
class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedStocks: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5080/all').then((res) => {
            console.log(res.data)
            this.setState({
                savedStocks: res.data
            })
        })
    }
    deleteStock = async (data) => {
        let res = await deleteData({ _id: data })
        const filtered = this.state.savedStocks.filter((item) => item._id !== res._id);
        console.log("tru del", filtered)
        this.setState({
            savedStocks: filtered
        })
    }
    render() {
        return (
            <div className="view">
                <Nav />
                <Hero />
                <Tablestocks savedStocks={this.state.savedStocks} deleteStock={(data) => this.deleteStock(data)} />
            </div>
        )
    }
}
export default View
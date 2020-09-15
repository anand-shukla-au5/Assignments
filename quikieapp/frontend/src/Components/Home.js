import React, { Component } from 'react'
import Tablestocks from './Table'
import { saveData } from '../actions/calls'
import axios from 'axios'
// import { getData } from '../actions/calls'
import Hero from './Hero'
import Nav from './Nav'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedStocks: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5080/all').then((res) => {
            console.log(res.data)
            let data = res.data
            data = data.map((el) => el.symbol)
            console.log("symbol", data)
            this.setState({
                savedStocks: data
            })
        })
    }
    saveStock = async (el) => {
        let data = {
            symbol: el["1. symbol"],
            name: el["2. name"],
            openclose: `${el["5. marketOpen"]}-${el["6. marketClose"]}`
        }
        let res = await saveData(data)
        console.log("true res", res)
        this.setState({
            savedStocks: [...this.state.savedStocks, res.symbol]
        })
    }
    render() {
        console.log("saved", this.state.savedStocks)
        return (
            <div className="home">
                <Nav />
                <Hero />
                <Tablestocks saved={this.state.savedStocks} saveStock={(data) => this.saveStock(data)} />
            </div>
        )
    }
}

export default Home

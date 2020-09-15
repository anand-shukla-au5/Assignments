import React, { Component } from 'react'
import Tablestocks from './Table'
import axios from 'axios'
import Hero from './Hero'
import Nav from './Nav'
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Nav />
                <Hero />
                <Tablestocks />
            </div>
        )
    }
}

export default Home

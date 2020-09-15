import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { } "../Style/Assets"
import { Card } from "react-bootstrap"

function Hero() {
    const [hero, setHero] = useState(['GOOGL.png', 'FB.png', 'AMZN.svg'])
    const [value, setValue] = useState([])
    const fetchData = () => {
        let val = []
        let company = ['GOOGL', 'FB', 'AMZN']
        company.forEach(async (el) => {
            console.log(el)
            let res = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${el}&token=btfq1mv48v6rl6gboru0`)
            let data = res.data["c"]
            val.push(Number(data))
        })
        setValue(val)
    }
    useEffect(() => {

    }, [value])
    useEffect(() => {
        fetchData()
    }, [])
    console.log("Price", value)
    return (
        <div className="heroCards">
            {value && hero.map((el, i) => {
                return (
                    <Card className="hero" key={i} >
                        <Card.Body>
                            <div className="sign">
                                <span className="heroText" ><strong>{String(el.split('.')[0])}</strong></span>
                                <img alt="logo" className="heroImg" height="50px" src={require(`../Style/Assets/${el}`)} />
                            </div>
                            <Card.Title style={{ 'marginTop': '2.6rem', 'fontSize': '2rem' }} className="text-center">{String(value[i])} USD</Card.Title>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Hero

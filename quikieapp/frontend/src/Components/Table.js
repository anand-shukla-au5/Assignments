import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { saveData } from '../actions/calls'
import axios from 'axios'
import { Container, Navbar, Form, FormControl, Table, Button } from 'react-bootstrap'
function Tablestocks({ saved, savedStocks, saveStock, deleteStock }) {
    const [query, setQuery] = useState("")
    const [company, setCompany] = useState([])
    const querFetch = async () => {
        if (query !== "") {
            let res = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=58IGBCPHWROIVG60`)
            console.log(res.data)
            setCompany(res.data["bestMatches"])
        }
    }
    useEffect(() => {
        querFetch()
    }, [query])



    console.log(query, company, "props", saved)
    if (savedStocks) {
        return <Container className="stockDetail">
            <Navbar className="stockNav" expand="lg" variant="light" bg="light">
                <Navbar.Brand className="text-center" href="#">Saved Data Table</Navbar.Brand>
            </Navbar>
            <div className="stockTable">
                {savedStocks.length !== 0 && <Table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Market(open-close)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedStocks.map((el, i) => {
                            return (
                                <tr key={el._id}>
                                    <td>{el.symbol}</td>
                                    <td>{el.name}</td>
                                    <td>{el.openclose}</td>
                                    <td><Button onClick={() => { deleteStock(el._id) }} variant="warning">Delete Data</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>}
            </div>
        </Container>
    }
    else {
        return (
            <Container className="stockDetail">
                <Navbar className="stockNav" expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Stock Details Table</Navbar.Brand>
                    <Form className="search" inline>
                        <FormControl onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search Company Name" className="mr-sm-2" />
                    </Form>
                    <Link id="viewData" to="/view"><Button className="text-right" variant="primary">View Data</Button></Link>
                </Navbar>
                <div className="stockTable">
                    {company.length !== 0 && <Table>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Market(open-close)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {company.map((el, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{el["1. symbol"]}</td>
                                        <td>{el["2. name"]}</td>
                                        <td>{el["5. marketOpen"]}-{el["6. marketClose"]}</td>
                                        {saved && saved.includes(el["1. symbol"]) ? <td><Link to="/view"><Button variant="primary">View Data</Button></Link></td> : <td><Button onClick={() => { saveStock(el) }} variant="info">Save Data</Button></td>}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>}
                </div>
            </Container>
        )
    }
}

export default Tablestocks
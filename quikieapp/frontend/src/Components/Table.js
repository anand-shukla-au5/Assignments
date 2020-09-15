import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Navbar, Form, FormControl, Table, Button } from 'react-bootstrap'
function Tablestocks() {
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
    console.log(query, company)
    return (
        <Container className="stockDetail">
            <Navbar className="stockNav" expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Stock Details Table</Navbar.Brand>
                <Form inline>
                    <FormControl onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search Company Name" className="mr-sm-2" />
                </Form>
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
                                    <td><Button variant="info">Save Data</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>}
            </div>
        </Container>
    )
}

export default Tablestocks

import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import SideBar from './SideBar'
import {
    UilBars,
} from '@iconscout/react-unicons'
import Table from './Table';
import { orderSummary, lastsevenDays, fetchorderList } from '../Api/api'
import Cards from './Cards';
import Linechart from './Chart';
import Summary from './Summary';

const cardColor = ['#edf0c9', '#c0e6fc', '#afc7ba'];
const styles = {
    chart: {
        width: '100%',
        overflowX: 'auto',
    },
    sideBarbutton: {
        height: '40px',
        width: '45px',
        position: 'absolute',
        left: '12px',
        top: '18px',
    },
    summaryContent: {
        background: '#f0f7fa',
        margin: '2.5rem',
        padding: '1.5rem',
    },
}
function Dashboard({ isloggedin, setisloggedin }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [summary, setsummary] = useState(null);
    const [sevenDay, setsevenDay] = useState([]);
    const [orderList, setorderList] = useState(null)

    useEffect(() => {
        if (isloggedin) {
            orderSummary().then(res => {
                setsummary(res)
            })
            lastsevenDays().then(res => {
                let data = Object.keys(res.data.last7Days).map((el, i) => {
                    let keyBE = String(el.split(' ').slice(0, 3).join());
                    return { 'profit': res.data.last7Days[el], 'date': keyBE }
                })
                setsevenDay(data)
            })
            fetchorderList().then(res => {
                console.log(res)
                setorderList(res)
            })
        }
    }, [isloggedin])
    return (
        <Container fluid className="p-2">
            <Row>
                <Col className="rounded-lg" sm={12} lg={5} md={12}>
                    <SideBar handleClose={handleClose} setisloggedin={setisloggedin} show={show} />
                    <Button style={styles.sideBarbutton} variant="secondary" size="sm">
                        <UilBars onClick={handleShow} />
                    </Button>
                    <Row className="p-3">
                        <Col xs={12}>
                            <div style={{ marginLeft: '60px' }}>
                                <h3 className="mt-1">Overview Shop</h3>
                                <h5 className="text-muted">Welcome Natalia</h5>
                            </div>
                        </Col>
                        <Col xs={12}>
                            {summary &&
                                <>
                                    <div className="d-flex flex-wrap justify-content-evenly mx-2 my-2">
                                        {Object.keys(summary.data.overview).map((el, i) =>
                                            <Cards key={i} title={el.toUpperCase()} val={summary.data.overview[el]} color={cardColor[i]} />
                                        )}
                                    </div>
                                    <Row style={styles.summaryContent}>
                                        <Col xs={2}>

                                        </Col>
                                        <Col xs={10}>
                                            <Summary summary={summary.data.summary} />
                                        </Col>
                                    </Row>
                                </>
                            }
                        </Col>
                        <Col xs={12}>
                            {sevenDay.length !== 0 && <div style={styles.chart}>
                                <Navbar expand="lg" className="mb-3">
                                    <Container>
                                        <Navbar.Brand style={{ borderBottom: '2px solid blue' }} href="#home">Revenue</Navbar.Brand>
                                        <Navbar.Brand href="#home">Orders</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Navbar.Text>
                                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                </NavDropdown>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                                <Linechart data={sevenDay} />
                            </div>}
                        </Col>
                    </Row>
                </Col>
                <Col style={{ "overflowX": 'hidden', "background": '#f0f7fa' }} className="p-5 rounded-lg" sm={12} lg={7} md={12}>
                    {orderList &&
                        <div className="d-flex flex-column justify-content-center">
                            <h3 className="mb-4 ml-5">Latest Orders</h3>
                            <Table tabledata={orderList.data} pageData={orderList.pagination} fetchorderList={fetchorderList} />
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
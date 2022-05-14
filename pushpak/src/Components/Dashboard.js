import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
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
    }
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
            <SideBar handleClose={handleClose} setisloggedin={setisloggedin} show={show} />
            <Row>
                <Col className="p-2 rounded-lg" sm={12} lg={6} md={12}>
                    <Row>
                        <Col xs={1} className="justify-content-sm-center">
                            <Button variant="secondary" size="sm" className="m-2">
                                <UilBars onClick={handleShow} />
                            </Button>
                        </Col>
                        <Col p={0} m={0}>
                            <div>
                                <h3 className="mt-2">Overview Shop</h3>
                                <h5 className="text-muted">Welcome Natalia</h5>
                            </div>
                            {summary &&
                                <>
                                    <div className="d-flex flex-wrap justify-content-between mx-2 my-2">
                                        {Object.keys(summary.data.overview).map((el, i) =>
                                            <Cards key={i} title={el.toUpperCase()} val={summary.data.overview[el]} color={cardColor[i]} />
                                        )}
                                    </div>
                                    <div className="p-3 mb-4">
                                        <Summary summary={summary.data.summary} />
                                    </div>
                                </>
                            }
                            {sevenDay.length !== 0 && <div style={styles.chart}>
                                <Linechart data={sevenDay} />
                            </div>}
                        </Col>
                    </Row>
                </Col>
                <Col style={{ "overflowX": 'hidden', "background": '#f0f7fa' }} className="p-2 rounded-lg" sm={12} lg={6} md={12}>
                    {orderList &&
                        <div class="d-flex flex-column justify-content-center">
                            <h3 className="mt-2 ml-5">Latest Orders</h3>
                            <Table tabledata={orderList.data} pageData={orderList.pagination} fetchorderList={fetchorderList} />
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
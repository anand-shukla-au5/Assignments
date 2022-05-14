import React, { useState } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import { loginApi } from '../Api/api'

function Loginform({ setisloggedin }) {
    const [email, setemail] = useState('anand.shukla@gmail')
    const [pass, setpass] = useState('Anand@123')

    const handleSubmit = (email, pass) => {
        loginApi('anand.shukla', pass).then((res) => {
            if (res.token) {
                setisloggedin(true)
                localStorage.setItem('token', res.token)
            }
        }).catch((err) => { })
    }

    return (
        <Container fluid>
            <h1 className="mt-5 p-3 text-success text-center">Login</h1>
            <Row className="mt-5">
                <Col className="p-5 m-auto shadow-sm rounded-lg" sm={12} lg={5} md={7}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setemail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button onClick={() => handleSubmit(email, pass)} variant="success" size="lg">
                                Submit
                            </Button>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? &nbsp;<a href="a">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <a href="a" >Forgot your password?</a>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Loginform
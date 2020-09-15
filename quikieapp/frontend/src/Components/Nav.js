import React from 'react'
import { Navbar } from 'react-bootstrap'
export default function Nav() {
    return (
        <Navbar className="navBar" bg="dark" variant="dark" expand="lg" >
            <Navbar.Brand href="#home">
                {/* <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /> */}
      Quikie App
    </Navbar.Brand>
        </Navbar>
    )
}

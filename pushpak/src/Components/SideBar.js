import React from 'react'
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from '@iconscout/react-unicons'
import {
    ListGroup, Nav,
    Offcanvas
} from 'react-bootstrap'

const sideBarIcon = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customer",
    },
    {
        icon: UilPackage,
        heading: "Product",
    },
    {
        icon: UilChart,
        heading: "Chart",
    },
]
export default function SideBar({ handleClose, show, setisloggedin }) {

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-monospace font-weight-bold">Navbar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant="flush" className="pe-3 flex-grow-3">
                    {sideBarIcon.map((el, key) =>
                        <Nav.Link key={key} className="mt-4 shadow-lg p-3 bg-white rounded">
                            <el.icon />
                            <span className="pl-3">{el.heading}</span>
                        </Nav.Link>
                    )}
                    <Nav.Link className="mt-4 shadow-lg p-3 bg-white rounded">
                        <UilSignOutAlt />
                        <span onClick={() => setisloggedin(false)} className="pl-3">{"Logout"}</span>
                    </Nav.Link>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
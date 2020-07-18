import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { getProducts } from '../Action/data'
class Main extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        console.log("STORE", this.props.state.products)
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Link to='/'>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                        Products
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                        <Nav className="text-white" >
                            <Link to='/cart'><Navbar.Text className="text-white">Your Cart</Navbar.Text></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.product
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProducts }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
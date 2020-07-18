import React from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeItem } from '../Action/data'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
// import Stripecheckout from 'react-stripe-checkout'
import Checkout from './checkout'
const promise = loadStripe("pk_test_51H6BcGIKOTKkvkPwhpnPHWUsBJLAoS5ZcfcHdahhDUBvSHXXbSj9KmUp80QbtYL7bKlOYn1Vesi7wGj5IoN2AHPA00R6zRa8Rd");
class Product extends React.Component {
    tokenHandle = (token, add) => {
        console.log(token, add)
    }
    render() {
        console.log(this.props.state.total)
        return (
            <div>
                <Container fluid className="box mt-3" >
                    {this.props.state.cart.map((el, i) => {
                        return (
                            <Card border="info" key={i} style={{ width: '18rem' }} className="rounded shadow-lg p-3 mb-5 bg-white rounded" >
                                <Card.Header className="text-center text-white bg-dark" ><strong>{el.productName}</strong></Card.Header>
                                <Card.Body>
                                    <Card.Text>Description....</Card.Text>
                                    <Button className="float-right" onClick={() => this.props.removeItem(el)} variant="outline-warning">Remove Item</Button>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem><b>Category:</b> {el.productCategory}</ListGroupItem>
                                    <ListGroupItem><b>Price:</b> {el.productPrice}</ListGroupItem>
                                    <ListGroupItem><b>Quantity:</b> 1</ListGroupItem>
                                </ListGroup>
                            </Card>
                        )
                    })}
                </Container>
                {this.props.state.cart.length === 0 ? <h1 className="text-center">Empty Cart</h1> :
                    <div className="text-center">
                        <h3>Total Sum {this.props.state.total}</h3>
                        {/* <Button variant="primary" size="lg" block>Check Out </Button> */}
                        {/* <Stripecheckout stripeKey='	
pk_test_51H6BcGIKOTKkvkPwhpnPHWUsBJLAoS5ZcfcHdahhDUBvSHXXbSj9KmUp80QbtYL7bKlOYn1Vesi7wGj5IoN2AHPA00R6zRa8Rd'
                            token={this.tokenHandle} /> */}
                        <div className="d-flex justify-content-center">
                            <Elements stripe={promise}>
                                <Checkout cart={this.props.state.cart} />
                            </Elements>
                        </div>
                    </div>}
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
    return bindActionCreators({ removeItem }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
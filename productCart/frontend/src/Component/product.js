import React from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addtoCart } from '../Action/data'
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
class Product extends React.Component {
    toCart = (data, id) => {
        this.props.addtoCart(data)
        let res = document.getElementById(id);
        console.log("on Working", res);
        res.style.pointerEvents = "none";
    }
    checkPresent = (el) => {
        console.log(this.props.state.cart)
        this.props.state.cart.forEach((e, i) => {
            if (e._id === el._id) {
                document.getElementById(el._id).disabled = true;
            }
        });
    }
    render() {
        return (
            <Container fluid className="box mt-3" >
                {this.props.state.products.map((el, i) => {
                    return (
                        <Card onMouseEnter={() => this.checkPresent(el)} border="info" key={i} style={{ width: '18rem' }} className="rounded shadow-lg p-3 mb-5 bg-white rounded" >
                            <Card.Header className="text-center text-white bg-dark" ><strong>{el.productName}</strong></Card.Header>
                            <Card.Body>
                                <Card.Text>Description....</Card.Text>
                                {el.productQty === 0 ? <b className="text-danger">Not Avaliable</b> :
                                    <Button className="float-right" id={el._id} onClick={() => this.toCart(el, el._id)} variant="outline-success">Add to Cart</Button>
                                }
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><b>Category:</b> {el.productCategory}</ListGroupItem>
                                <ListGroupItem><b>Price:</b> {el.productPrice}</ListGroupItem>
                                <ListGroupItem><b>Quantity:</b> {el.productQty}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    )
                })
                }
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.product
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addtoCart }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
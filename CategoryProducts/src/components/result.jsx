import React from 'react';
import '../App.css'
import { Media, Image, ListGroup, Button } from 'react-bootstrap'

function Result(props) {
    const { proList, pages } = props
    const previous = (no) => {
        pages(no)
    }
    return (
        <div className="result-container mt-3">
            <h3>Products</h3>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-3">
                    <li className="page-item ">
                        <a className="page-link" tabIndex="1" onClick={() => previous('back')} >Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" onClick={() => { previous(1) }}>1</a></li>
                    <li className="page-item"><a className="page-link" onClick={() => { previous(2) }} >2</a></li>
                    <li className="page-item"><a className="page-link" onClick={() => { previous(3) }} >3</a></li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => { previous('next') }} >Next</a>
                    </li>
                </ul>
            </nav>
            <ul className="list-unstyled">
                {proList && proList.map(el => {
                    return (
                        <div className="cards shadow p-3 mb-5 bg-white rounded m-2" key={el.id} >
                            <Media key={el.id} as="li">
                                <Image width={200} height={210} thumbnail="true" src={el.thumbnail} rounded />
                                <Media.Body className="p-2">
                                    <h5>{el.name}</h5>
                                    <ListGroup size="sm" variant="flush">
                                        {el.metrics_label && <ListGroup.Item>Weight : {el.metrics_label}</ListGroup.Item>}
                                        {el.minimum_quantity && <ListGroup.Item>Minimum Quantity : {el.minimum_quantity}</ListGroup.Item>}
                                        <ListGroup.Item>Price : <strong>{el.display_price}</strong></ListGroup.Item>
                                        {el.out_of_stock && <ListGroup.Item className="bg-danger text-white">Out Of Stock</ListGroup.Item>}
                                    </ListGroup>
                                    <div>
                                        <Button className="float-right mt-1" disabled={el.out_of_stock} variant={el.out_of_stock ? "outline-danger" : "outline-success"}>Add to Cart</Button>
                                    </div>
                                </Media.Body>
                            </Media>
                        </div>
                    )
                })}
                {!proList && <div>
                    <h3 className="text-center">No Products</h3>
                </div>}
            </ul>
        </div>
    );
}

export default Result
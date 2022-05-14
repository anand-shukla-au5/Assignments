import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
function Summary({ summary }) {
    return (
        <ListGroup variant="flush" as="ol">
            {summary?.length && summary.map((el, key) =>
                <ListGroup.Item
                    key={key}
                    variant="info"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{el.order_status}</div>
                    </div>
                    <Badge bg="success" pill>
                        {el.count}
                    </Badge>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default Summary
import React from 'react'
import { ListGroup, Stack } from 'react-bootstrap'
const styles = {
    listItem: {
        borderBottom: '1px solid lightgrey',
        padding: '6px',
    },
    percentInfo: {
        color: 'grey',
    },
    countInfo: {
        fontWeight: 'bold',
    }
}
function Summary({ summary }) {
    return (
        <ListGroup variant="flush" as="ul">
            <Stack gap={2}>
                {summary?.length && summary.map((el, key) =>
                    <div style={styles.listItem} key={key} className='d-flex'>
                        <div className="ms-2 me-auto">
                            <div className="fw-normal">{el.order_status}</div>
                        </div>
                        <div style={styles.countInfo}>
                            {el.count}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.percentInfo}>{el.count / 10}%</span>
                        </div>
                    </div>
                )}
            </Stack>
        </ListGroup>
    )
}

export default Summary
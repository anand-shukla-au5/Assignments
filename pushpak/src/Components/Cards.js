import React from 'react'
const styles = {
    cardStyle: (color) => {
        return {
            backgroundColor: color,
            width: '11rem',
            borderRadius: '10px',
            padding: '4px',
        }
    },
    cardHead: {
        padding: '10px',
    },
    percentHead: {
        fontSize: '20px'
    }
}
function Cards({ title, val, color }) {
    const head = title.split('_')
    return (
        <div className="card my-3" style={styles.cardStyle(color)}>
            <h6 style={styles.cardHead}>{head[0]} <br /> {head[1]}</h6>
            <div className="card-body">
                <p style={styles.percentHead}>+8% &#8593;</p>
                <h3 className="card-text">&#x20B9;{val}</h3>
            </div>
        </div>
    )
}

export default Cards
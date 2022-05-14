import React from 'react'

function Cards({ title, val, color }) {
    return (
        <div className="card my-3" style={{ background: `${color}` }}>
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <p className="card-text">&#x20B9;{val}</p>
            </div>
        </div>
    )
}

export default Cards
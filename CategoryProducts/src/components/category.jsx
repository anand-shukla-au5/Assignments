import React, { useState, useEffect } from 'react';
import { Button, Badge } from 'react-bootstrap'
import '../App.css';
function Category(props) {
    const { catList, catPro } = props
    return (
        <div>
            <h2>Categories</h2>
            <div className="category">
                {catList && catList.map(elem => {
                    return (
                        <div className="button" key={elem.id}>
                            <Button onClick={() => catPro(elem.id)} className="card-button m-2" variant="info">{elem.name}<Badge variant="light">{elem.count}</Badge>
                                <span className="sr-only"></span>
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Category;

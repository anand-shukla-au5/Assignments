import axios from 'axios'
export function getProducts() {
    return (dispatch) => {
        console.log("Fetching....")
        axios.get('/get/product')
            .then((res) => {
                dispatch({
                    type: 'PRODUCTS',
                    payload: res.data
                })
            })
    }
}
export function addtoCart(data) {
    return (dispatch) => {
        dispatch({
            type: "CART",
            payload: data
        })
    }
}
export function removeItem(data) {
    return (dispatch) => {
        dispatch({
            type: "REMOVE",
            payload: data
        })
    }
}
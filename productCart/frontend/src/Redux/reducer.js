let productData = {
    products: [],
    cart: [],
    total: 0
}
export function productReducer(state = productData, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "PRODUCTS":
            stateCopy.products = action.payload
            return stateCopy
        case "CART":
            stateCopy.cart.push(action.payload)
            stateCopy.total += action.payload.productPrice
            console.log("price", stateCopy.total)
            return stateCopy
        case "REMOVE":
            console.log(action)
            stateCopy.total -= action.payload.productPrice
            stateCopy.cart.forEach((e, i) => {
                if (e._id === action.payload._id) {
                    stateCopy.cart.splice(i, 1);
                }
            });
            return stateCopy
        default:
            return state
    }
}

let initailState = {
    posts: []
}
function postReducer(state = initailState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "ALL":
            stateCopy.posts = action.payload
            return stateCopy
        case "POSTDATA":
            console.log(action.payload)
            stateCopy.posts.push(action.payload)
            return stateCopy
        case "COMMENT":
            console.log(action.payload)
            return stateCopy
        default:
            return stateCopy
    }
}
export default postReducer
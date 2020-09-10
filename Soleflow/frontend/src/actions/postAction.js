import axios from "axios"
export function getAll() {
    return (dispatch) => {
        return axios({
            method: "GET",
            url: 'http://localhost:5080/all',
        }).then(res => {
            console.log(res)
            dispatch({
                type: "ALL",
                payload: res.data
            })
        })
    }
}
export function postData(data) {
    return (dispatch) => {
        return axios({
            method: "POST",
            url: 'http://localhost:5080/create',
            data
        }).then(res => {
            console.log("POST DATA", res)
            dispatch({
                type: "POSTDATA",
                payload: res.data
            })
        })
    }
}
export function postComment(data) {
    return (dispatch) => {
        return axios({
            method: "POST",
            url: 'http://localhost:5080/comment',
            data
        }).then(res => {
            console.log("COMMENT", res)
            dispatch({
                type: "COMMENT",
                payload: res.data
            })
        })
    }
}
export function ratingPost(operation) {
    return (dispatch) => {
        switch (operation) {
            case "like":
                console.log(operation)
                return
            case "dislike":
                console.log(operation)
                return
            case "heart":
                console.log(operation)
                return
            default:
                return
        }
    }
}
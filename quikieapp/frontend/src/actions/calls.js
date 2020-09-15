import axios from "axios"
export function getData() {
    axios.get('http://localhost:5080/all').then((res) => {
        console.log(res.data)
        return res.data
    })
}
export async function saveData(data) {
    let res = await axios.post('http://localhost:5080/create', data)
    console.log(res.data)
    return res.data
}
export async function deleteData(data) {
    let res = await axios.post('http://localhost:5080/delete', data)
    console.log(res.data)
    return res.data
}

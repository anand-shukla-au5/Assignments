import axios from 'axios'
const API_DEFAULT = 'https://api.unsplash.com'
const getphotos = () => axios.get(`${API_DEFAULT}/photos`, {
    headers: {
        'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    }
})
export {
    getphotos,
}
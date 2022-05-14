import axios from "axios";
const BASE_URL = "http://anpr-auth.dev.pushpak.ml:10988/"

export const loginApi = (email, pass) =>
    axios.post(`${BASE_URL}api/login`, {
        "username": email,
        "password": pass,
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        });

export const orderSummary = () =>
    axios.get(`${BASE_URL}api/analytics/summary`, {
        headers: {
            Authorization: String(localStorage.getItem('token')),
        }
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        });

export const lastsevenDays = () =>
    axios.get(`${BASE_URL}api/analytics/last7Days`, {
        headers: {
            Authorization: String(localStorage.getItem('token')),
        }
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        });

export const fetchorderList = (page = 1, limit = 20) =>
    axios.get(`${BASE_URL}api/orders?page=${page}&limit=${limit}&order_status=`, {
        headers: {
            Authorization: String(localStorage.getItem('token')),
        }
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        });
import Axios from "axios"

export const axios = Axios.create({
    // baseURL: 'https://yusufmustahan-api.onrender.com/'
    baseURL: 'http://localhost:5000/'
})


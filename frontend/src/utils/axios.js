import Axios from "axios"

export const axios = Axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://yusufmustahan-api.onrender.com:5000/'
    // baseURL: 'https://yusufmustahan-api.onrender.com'
   
})
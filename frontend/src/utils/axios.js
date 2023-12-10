import Axios from "axios"

export const axios = Axios.create({
    // baseURL: 'https://tired-cowboy-hat-bat.cyclic.app'
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://yusufmustahan-api.onrender.com/'
    // baseURL: 'https://yusufmustahan-api.onrender.com'
   
})


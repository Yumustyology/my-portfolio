import Axios from "axios"

export const axios = Axios.create({
    baseURL: 'https://yung-portfolio-backend.vercel.app/'
})


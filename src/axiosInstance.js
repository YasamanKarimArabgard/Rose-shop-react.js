import axios from "axios";

const instance = axios.create({
    baseURL : 'https://roseshop-backend.vercel.app'
})

export default instance;
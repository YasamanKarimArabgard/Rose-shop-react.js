import axios from 'axios';

axios.defaults.baseURL = 'https://nodejs-post-app.herokuapp.com/api'

const http = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post
}

export default http;
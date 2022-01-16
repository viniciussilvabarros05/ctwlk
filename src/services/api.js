import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000/market'
})

export default api
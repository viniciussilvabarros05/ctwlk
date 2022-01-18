import axios from 'axios'

const api = axios.create({
    baseURL: ' http://appvscommerce-env.eba-nh4bpewq.us-east-1.elasticbeanstalk.com/market'
})

export default api
import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID LFM89WUnJ_KhH25sdWEdmVLwQ25lsylEqqny7cicWTE'
    }
})
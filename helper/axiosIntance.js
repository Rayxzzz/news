import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : 'https://news-ridho.herokuapp.com/'
})


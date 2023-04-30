import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://yaroslavhrabovets.in.ua/country-api'
})

export default instance

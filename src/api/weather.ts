import axios from 'axios'

const weatherApi = axios.create({
  baseURL: process.env.OPEN_WEATHER_API_URL,
})

weatherApi.defaults.headers.common['Content-Type'] = 'application/json'
weatherApi.defaults.headers.common.Accept = 'application/json'
weatherApi.defaults.headers['x-rapidapi-key'] = process.env.OPEN_WEATHER_API_KEY 
weatherApi.defaults.headers['x-rapidapi-host'] = process.env.OPEN_WEATHER_API_URL
weatherApi.defaults.headers.useQueryString = true

export { weatherApi }


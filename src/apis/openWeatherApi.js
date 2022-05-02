import axios from 'axios';

const API_KEY = '2c71dd0242936e7ad421193a34a243f6';
const baseUrl = 'https://api.openweathermap.org/data/2.5/' 

function getCurrentWeather(location) {
    return axios.get(
        `${baseUrl}weather?q=${location}&units=imperial&appid=${API_KEY}`
    )
}

function getForeCast(lat, lon) {
    return axios.get(
        `${baseUrl}onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
    )
}

export {
    getCurrentWeather,
    getForeCast
}
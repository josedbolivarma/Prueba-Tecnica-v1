import axios from 'axios';

const API_KEY = 'pk.eyJ1Ijoiam9zZWRib2xpdmFybWFmcm9udGVuZDgyIiwiYSI6ImNsMmgybDVkZTAwY3IzY3A4ZGN5MHRrMXEifQ.zbiGMxUeuHIR2wEnpnhQZg';
const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 

function getMap(city) {
    return axios.get(
       `${baseUrl}${city}.json?access_token=${API_KEY}`
    )
}

export {
    getMap
}


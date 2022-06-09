const axios = require('axios');
const environment = require('./../environment.js');

class GeoCodingService {
    getZipCodeCoordinatesAsync = async (zipCode) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${environment.googleMapsApiKey}`
        const response = await axios.get(url);
        return response?.data?.results[0]?.geometry?.location;
    }
}

module.exports = GeoCodingService;
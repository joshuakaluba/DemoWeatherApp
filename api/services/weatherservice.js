const axios = require('axios');

class WeatherService {

    getHourlyForecastUrlAsync = async (coordinates) => {
        const url = `https://api.weather.gov/points/${coordinates.lat},${coordinates.lng}`;
        const response = await axios.get(url);
        return response?.data?.properties?.forecastHourly;
    }

    getForecastAsync = async (forecastUrl) => {
        const response = await axios.get(forecastUrl);
        return response?.data?.properties?.periods;
    }
}

module.exports = WeatherService;
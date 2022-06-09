const express = require('express');
const cors = require('cors')
const environment = require('./environment.js');
const zipCodeValidator = require('./utilities/zipcodevalidationutility.js');
const app = express();

const GeoCodingService = require('./services/geocodingservice.js');
const WeatherService = require('./services/weatherservice.js');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/forecast/:zipCode', async (req, res) => {
    try {
        const zipCode = req.params.zipCode;

        if (!zipCodeValidator.isValid(zipCode)) {
            res.status(400).send({ 'errorMessage': 'Invalid zip code provided' });
            return;
        }

        const geoCodingService = new GeoCodingService();
        const coordinates = await geoCodingService.getZipCodeCoordinatesAsync(zipCode);

        if (coordinates === undefined || coordinates.lat === null || coordinates.lng === null) {
            res.status(404).send({ 'errorMessage': 'Unable to retrieve coordinates from zip code, please enter a valid zip code like 37188' });
            return;
        }

        const weatherService = new WeatherService();
        const hourlyForecastUrl = await weatherService.getHourlyForecastUrlAsync(coordinates);

        if (hourlyForecastUrl === undefined || hourlyForecastUrl === '') {
            res.status(400).send({ 'errorMessage': 'Unable to retrieve hourly forecast url' });
            return;
        }

        const forecast = await weatherService.getForecastAsync(hourlyForecastUrl);

        if (forecast === undefined) {
            res.status(400).send({ 'errorMessage': 'Unable to retrieve hourly forecast' });
            return;
        }

        res.send(forecast);

    } catch (error) {
        console.error(error);
        res.status(500).send({ 'errorMessage': error?.response?.data?.detail || 'Internal Server Error' });
    }
});

app.listen(environment.port, () => {
    console.log(`Listening at http://localhost:${environment.port}`)
});
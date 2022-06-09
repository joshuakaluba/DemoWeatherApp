import React, { useState, useEffect } from 'react';
import Forecast from '../models/Forecast';
import ZipCodeValidationUtility from '../utilities/ZipCodeValidationUtility';
import { useParams } from 'react-router-dom';
import { ForecastService } from '../services/ForecastService';
import { Notification, ForecastList } from '../components';

const ForecastPage = () => {
    const { zipCode } = useParams();
    const [forecast, setForecast] = useState<Forecast[]>([]);
    const [isNotificationVisible, setNotificationVisible] = useState<boolean>(false);
    const [notificationText, setNotificationText] = useState<string>('');

    useEffect(() => {
        const getForecastAsync = async () => {
            try {
                if (ZipCodeValidationUtility.isValid(zipCode as string)) {
                    const forecastService = new ForecastService();
                    const forecast = await forecastService.getHourlyForecast({ zipCode: zipCode || '' });
                    setForecast(forecast);
                    setNotificationVisible(false);
                }
                else {
                    setNotificationVisible(true);
                    setNotificationText('Zip code provided is invalid.');
                }
            } catch (error: any) {
                setNotificationVisible(true);
                setNotificationText(error.message);
            }
        };
        getForecastAsync();
    }, [zipCode]);

    return (
        <>
            {isNotificationVisible && <Notification text={notificationText} />}

            {
                !!forecast && forecast.length > 0 &&
                <p className='has-text-centered mb-4 mt-1 is-size-5'>
                    Showing results for zip code : <strong>{zipCode}</strong>
                </p>
            }
            <ForecastList forecasts={forecast} />
        </>
    );
};

export default ForecastPage;
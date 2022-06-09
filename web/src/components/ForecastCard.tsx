import { useContext } from 'react';
import moment from 'moment';
import TemperatureContext from '../hooks/TemperatureContext';
import ForecastCardProps from '../models/ForecastCardProps';
import ConversionUtility from '../utilities/ConversionUtility';
import './ForecastCard.css';

const ForecastCard = ({ forecast }: ForecastCardProps) => {

    // @ts-ignore
    const [isCelsiusToggled] = useContext(TemperatureContext);

    return (
        <div className='columns mt-2 mb-1 card-container is-mobile ml-3 mr-3'>
            <div className='column'>
                <div className='columns'>
                    <div className='column'>
                    <p className='date-text mb-1'>{moment(forecast.startTime).format('ddd, MMMM Do, ha')}</p>
                        <img src={forecast.icon} alt='weather icon' className='bordered-img' />
                    </div>
                    <div className='column'>
                        <p className='forecast-text temperature-text'>
                            {isCelsiusToggled === false ? `${forecast.temperature} ° F` : `${ConversionUtility.fahrenheitToCelsius(forecast.temperature)} ° C`}
                        </p>
                    </div>
                </div>
            </div>
            <div className='column'>
                <p className='forecast-text'>{forecast.shortForecast}</p>
                <p className='wind-text'>{`Wind: ${forecast.windSpeed} - ${forecast.windDirection}`}</p>
            </div>
        </div>
    );
}
export default ForecastCard;
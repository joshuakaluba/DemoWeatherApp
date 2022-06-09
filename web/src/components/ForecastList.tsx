import ForecastListProps from './../models/ForecastListProps';
import ForecastCard from './ForecastCard';

const ForecastList = ({ forecasts }: ForecastListProps) => {
    return (
        <div className='ml-1 mr-1 pl-1 pr-1'>
            {
                forecasts.length > 0 && forecasts.map(forecast =>
                    <ForecastCard
                        key={forecast.number}
                        forecast={forecast} />
                )
            }
        </div>
    )
}

export default ForecastList;
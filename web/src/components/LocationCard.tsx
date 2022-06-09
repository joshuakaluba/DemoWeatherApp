import { Link } from 'react-router-dom';
import LocationCardProps from '../models/LocationCardProps';

const LocationCard = ({ name, imageUrl, zipCode }: LocationCardProps) => {
    return (
        <Link className='column' to={`/forecast/${zipCode}`}>
            <div className='card'>
                <div className='card-image'>
                    <figure className='image'>
                        <img src={imageUrl} alt='city name' />
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media'>
                        <div className='media-content'>
                            <p className='title is-4'>{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default LocationCard;
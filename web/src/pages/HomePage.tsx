import { LocationCard } from '../components';
import LocationCardProps from './../models/LocationCardProps';
const HomePage = () => {

    const locations: LocationCardProps[] = [
        { name: 'Manhattan', imageUrl: '/img/manhattan.jpg', zipCode: '10036' },
        { name: 'San Francisco', imageUrl: '/img/sanfran.jpg', zipCode: '94103' },
        { name: 'Miami Beach', imageUrl: '/img/miami.jpg', zipCode: '33140' }
    ];
    
    return (
        <>
            <div className='columns'>
                <div className='column'>
                    <div className='notification is-info is-light '>
                        Welcome 😁, Please enter your zip code to begin.
                    </div>
                </div>
            </div>
            <div className='columns is-centered'>
                <div className='column'>
                    <p className='has-text-centered has-text-weight-medium'>Or check out the weather at any of these beautiful locations:</p>
                </div>
            </div>
            <div className='columns ml-3 mr-3'>
                {
                    locations.map((location, index) =>
                        <LocationCard
                            key={index}
                            name={location.name}
                            imageUrl={location.imageUrl}
                            zipCode={location.zipCode}
                        />
                    )
                }
            </div>
        </>
    );
};

export default HomePage;
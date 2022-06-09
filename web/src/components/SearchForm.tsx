import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryInput from './PrimaryInput';
import PrimaryButton from './PrimaryButton';
import ZipCodeValidationUtility from '../utilities/ZipCodeValidationUtility';
import StorageUtility from '../utilities/StorageUtility';

const SearchForm = () => {
    const navigate = useNavigate();

    const [zipCode, setZipCode] = useState('');

    const _onSearchButtonClick = () => {
        StorageUtility.setStoredZipCode(zipCode);
        setZipCode('');
        navigate(`/forecast/${zipCode}`);
    };

    useEffect(() => {
        const zipCode = StorageUtility.getPreviouslyStoredZipCode();

        if (!!zipCode && zipCode.length > 1) {
            setZipCode(zipCode);
            navigate(`/forecast/${zipCode}`);
        }
    }, [navigate]);

    return (
        <div className='columns mt-3 is-centered is-mobile mr-1 ml-1'>
            <div className='column is-8'>
                <PrimaryInput
                    placeholder='Please enter your zip code.'
                    value={zipCode}
                    onChange={(event: any) => {
                        setZipCode(event.target.value);
                    }} />
            </div>
            <div className='column is-4'>
                <PrimaryButton
                    text={'Search'}
                    disabled={!ZipCodeValidationUtility.isValid(zipCode)}
                    onClick={_onSearchButtonClick} />
            </div>
        </div>
    );
};

export default SearchForm;
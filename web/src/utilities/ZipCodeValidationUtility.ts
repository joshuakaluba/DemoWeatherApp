const ZipCodeValidationUtility = {

    isValid: (zipCode: string): boolean => {
        return /^\d{5}(-\d{4})?$/.test(zipCode);
    }
};

export default ZipCodeValidationUtility;

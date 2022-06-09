const ZipCodeValidationUtility = {
    isValid: (zipCode) => {
        // from https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
        return /^\d{5}(-\d{4})?$/.test(zipCode);
    }
};

module.exports = ZipCodeValidationUtility;
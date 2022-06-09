const ConversionUtility = {

    fahrenheitToCelsius: (temperature: number): string => {
        const result = (temperature - 32) * 5 / 9;
        return result.toFixed(0);
    }
};

export default ConversionUtility;

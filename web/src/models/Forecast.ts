export default interface Forecast {
    number: number;
    name: string;
    startTime: Date;
    endTime: Date;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend?: any;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}
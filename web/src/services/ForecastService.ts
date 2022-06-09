import environment from '../environment';
import ZipCode from '../models/ZipCode';
import Forecast from '../models/Forecast';

export class ForecastService {

    public async getHourlyForecast(zipCode: ZipCode): Promise<Forecast[]> {

        const apiUrl = `${environment.serverUrl}/forecast/${zipCode.zipCode}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (response.status !== 200) {
            throw new Error(json.errorMessage ? json.errorMessage : 'Unable to get hourly forecast');
        }
        return json as Forecast[];
    }

}
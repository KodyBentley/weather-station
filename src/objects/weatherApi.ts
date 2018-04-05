import * as Weather from 'openweather-apis';
// const Weather = require('openweather-apis');
import * as Request from 'request';

export default class WeatherApi {
    constructor() {
        this.init();
    }

    init() {
        Weather.setLang('en');
        Weather.setZipCode(93004);
        Weather.setUnits('metric');
        Weather.setAPPID('0f98cf014f161d1d09caf3d37b5d144f');

        // Weather.getTemperature((err, temp) => {
        //     if(err) {
        //         console.log("WEATHER ERR");
        //     } else {
        //         console.log("Current Temp", temp);
        //     }
        // });

        // Weather.getHumidity((err, hum) => {
        //     if(err) {
        //         console.log('WEATHER ERR');
        //     } else {
        //         console.log("Current Humidity", hum);
        //     }
        // });
    }

    public static getTemp() {
        Weather.setLang('en');
        Weather.setZipCode(93004);
        Weather.setUnits('metric');
        Weather.setAPPID('0f98cf014f161d1d09caf3d37b5d144f');
        let arr = [];
        Weather.getTemperature((err, temp) => {
            if (err) {
                console.log("WEATHER ERR");
            } else {
                console.log("Current Temp", temp);
                arr.push(temp);
            }
        });
        return arr;
    }

    public static getHumidity() {
        Weather.setLang('en');
        Weather.setZipCode(93004);
        Weather.setUnits('metric');
        Weather.setAPPID('0f98cf014f161d1d09caf3d37b5d144f');
        Weather.getHumidity((err, hum) => {
            if (err) {
                console.log('WEATHER ERR');
            } else {
                console.log("Current Humidity", hum);
            }
        });
    }
}
const sensor = require('node-dht-sensor');
// const Say = require('say');
import LCD from './../objects/lcd';
import * as Say from 'say';

export default class Sensor {
    private _lcd: LCD;
    constructor() {
        console.log("Sensor class");
        this.init();
    }

    init() {
        var sensorRead = {
            initialize: function () {
                return sensor.initialize(11, 26);
            },
            read: function () {
                var readOut = sensor.read();
                var temp = readOut.temperature.toFixed(1) + 'C';
                var humidity = readOut.humidity.toFixed(1) + '%';
                console.log(temp, humidity);
                LCD.setLCD(temp, humidity);

                // let voice = "cmu_us_clb_arctic_clunits ";
                // Say.speak('Hello Cody, the current temperature in your room is ' + readOut.temperature.toFixed(1) + 'and humidity is ' + readOut.humidity.toFixed(1), voice, 0.9, (err) => {
                //     if (err) {
                //         console.log('SAY ERROR', err)
                //     } else {
                //         console.log('Should be speaking');
                //     }
                // });

                setTimeout(function () {
                    // LCD.clearLCD();
                    sensorRead.read();
                }, 3000);
            }
        };

        if (sensorRead.initialize()) {
            LCD.lcdInit();
            sensorRead.read();
            console.log('if statement triggering');
        } else {
            console.log('sensor did not init');
        }

        process.on('SIGINT', function () {
            LCD.clearLCD();
            process.exit();
        });
    }
}
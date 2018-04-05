"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sensor = require('node-dht-sensor');
// const Say = require('say');
const lcd_1 = require("./../objects/lcd");
class Sensor {
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
                lcd_1.default.setLCD(temp, humidity);
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
            lcd_1.default.lcdInit();
            sensorRead.read();
            console.log('if statement triggering');
        }
        else {
            console.log('sensor did not init');
        }
        process.on('SIGINT', function () {
            lcd_1.default.clearLCD();
            process.exit();
        });
    }
}
exports.default = Sensor;

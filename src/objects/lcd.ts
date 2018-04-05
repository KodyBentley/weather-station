const LCD = require('lcd');

export default class LCDClass {
    public static _lcd: any;

    public static lcdInit() {
        console.log('initializing LCD')
        this._lcd = new LCD({
            rs: 12,
            e: 21,
            data: [5, 6, 17, 18],
            cols: 8,
            rows: 2
        });

        this._lcd.on('ready', function (err) {
            if (err) {
                console.log('ERROR', err)
            } else {
                this.setCursor(0, 0);
            }
        });
    }

    public static setLCD(temp, humidity) {
        console.log('set lcd being called')
        // this._lcd.clear();
        // this._lcd.setCursor(0, 0);
        // this._lcd.print('Temp: ' + temp);
        // this._lcd.once('printed', function () {
        //     console.log('on printed');
        //     this.setCursor(0, 1);
        //     this.print('Humidity: ' + humidity);
        // });

        this._lcd.clear();
        this._lcd.setCursor(0, 0);
        // this._lcd.print('Hello World')
        this._lcd.print('T:' + temp + ' H:' + humidity);
        this._lcd.once('printed', () => {
            console.log('on printed');
            this._lcd.setCursor(0, 1);
            this._lcd.print('Hello World!');
        });
        // this._lcd.once('printed', function() {
        //     this.setCursor(0, 1);
        //     this.print('Hello World!');
        // })
    }

    public static clearLCD() {
        console.log('clear LCD called');
        this._lcd.clear();
        this._lcd.close();        
    }
}
const { Gpio } = require('pigpio')

const leftBack = new Gpio(7, {
    mode: Gpio.OUTPUT
});
const leftForward = new Gpio(8, {
    mode: Gpio.OUTPUT
});
const rightBack = new Gpio(9, {
    mode: Gpio.OUTPUT
});
const rightForward = new Gpio(10, {
    mode: Gpio.OUTPUT
});


rightForward.digitalWrite(1)
const { Gpio } = require('pigpio')

const DURATION = 1000

const rightForward = new Gpio(7, {
    mode: Gpio.OUTPUT
});
const rightBackward = new Gpio(8, {
    mode: Gpio.OUTPUT
});
const leftForward = new Gpio(9, {
    mode: Gpio.OUTPUT
});
const leftBackWard = new Gpio(10, {
    mode: Gpio.OUTPUT
});



function move([rf, rb, lf, lb]) {
    rightForward.digitalWrite(rf)
    rightBackward.digitalWrite(rb)
    leftForward.digitalWrite(lf)
    leftBackWard.digitalWrite(lb)
    return new Promise((res) => {
        setTimeout(res, DURATION)
    })
}


const movementDictionary = {
    forward: [1, 0, 1, 0],
    left: [1, 0, 0, 1],
    backward: [0, 1, 0, 1],
    right: [0, 1, 1, 0],
    stop: [0, 0, 0, 0]
}

async function runSequence(sequence) {
    const sequenceWithStop = [...sequence, "stop"]
    for (let i = 0; i < sequenceWithStop.length; i++) {
        await move(movementDictionary[sequenceWithStop[i]] || [0, 0, 0, 0])
    }
}

module.exports = { runSequence }
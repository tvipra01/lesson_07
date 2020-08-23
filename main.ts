let buttonState = 0
basic.forever(function () {
    buttonState = pins.digitalReadPin(DigitalPin.P5)
    if (buttonState == 0) {
        basic.showString("bye")
    } else {
        basic.showString("hi")
    }
})

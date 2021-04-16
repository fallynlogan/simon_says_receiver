/**
 * Set all of our variables up with their cooresponding values and calibrate to get baseline reading
 * 
 * and sets radio group
 */
/**
 * Reads in each of the pin reading values and sets the reading of that cooresponding pin to the value
 */
/**
 * The delay of 5s allows for reaction time from the follower
 */
// THIS IS FOR THE FOLLOWER
function readPin1 () {
    reading1 += pins.analogReadPin(AnalogPin.P1)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
/**
 * Simon will send a certain number via radio. When that number is received by this code if the action that the follower is doing matches that number they will get a check mark and a correct sound will play, if they dont an x and incorrect sound will play
 */
/**
 * If any of our capacitive sensors have been touched by Simon sense will be called to check if the follower has also touched the cooresponding sensor
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.pause(5000)
        if (input.isGesture(Gesture.Shake)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 2) {
        basic.pause(5000)
        if (input.isGesture(Gesture.LogoDown)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 3) {
        basic.pause(5000)
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 4) {
        basic.pause(5000)
        if (input.isGesture(Gesture.TiltRight)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 5) {
        basic.pause(5000)
        if (input.isGesture(Gesture.ScreenDown)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 6) {
        basic.pause(5000)
        if (input.isGesture(Gesture.FreeFall)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 7) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 8) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 9) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 10) {
        basic.pause(5000)
        sense()
        if (state0) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 11) {
        basic.pause(5000)
        sense()
        if (state1) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 12) {
        basic.pause(5000)
        sense()
        if (state2) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
/**
 * This function checks to see if the capactitive touch sensor has been touched or not
 */
/**
 * If any of these are true, it means that we have touched our capacitive sensor and will set the cooresponding state to true
 */
// THIS CODE IS FOR SIMON
// 
// state1 =
// 
// 
// state1 = calibration_value + threshold < reading1 / 1.1 / samples
// state0 = calibration_value + threshold < reading2 / 1.1 / samples
function sense () {
    reading0 = 0
    reading1 = 0
    reading2 = 0
    for (let index3 = 0; index3 <= samples; index3++) {
        readPin0()
        readPin1()
        readPin2()
        basic.pause(1)
    }
    state0 = calibration_value0 + threshold < reading0 / 0.8 / samples
    state1 = calibration_value1 + threshold < reading1 / 0.8 / samples
    state2 = calibration_value2 + threshold < reading2 / 0.8 / samples
}
/**
 * We will need to get a base reading of our pin values so that Microbit can detect waht the baseline reading of our sensor is without being touched
 */
function calibrate () {
    reading0 = 0
    for (let index2 = 0; index2 <= samples; index2++) {
        readPin0()
        readPin1()
        readPin2()
        basic.pause(1)
    }
    calibration_value0 = reading0 / samples
    calibration_value1 = reading1 / samples
    calibration_value2 = reading2 / samples
}
function readPin2 () {
    reading2 += pins.analogReadPin(AnalogPin.P2)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function readPin0 () {
    reading0 += pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P0, 1)
}
let calibration_value2 = 0
let calibration_value1 = 0
let reading2 = 0
let reading0 = 0
let reading1 = 0
let calibration_value0 = 0
let state2 = false
let state1 = false
let state0 = false
let samples = 0
let threshold = 0
let index = 0
threshold = 2
pins.setPull(DigitalPin.P0, PinPullMode.PullNone)
samples = 8
state0 = false
state1 = false
state2 = false
calibration_value0 = 0
calibrate()
basic.showString("SIMON SAYS")
radio.setGroup(1)

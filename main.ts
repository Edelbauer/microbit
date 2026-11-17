input.onButtonPressed(Button.A, function () {
    a += -1
    if (a == 0) {
        led.unplot(3, 4)
        led.plotBrightness(2, 4, 255)
    }
    if (a == 1) {
        led.unplot(0, 4)
        led.plotBrightness(3, 4, 255)
    }
    if (a == -1) {
        led.unplot(2, 4)
        led.plotBrightness(1, 4, 255)
    }
    if (a == -2) {
        led.unplot(1, 4)
        led.plotBrightness(0, 4, 255)
    }
})
input.onButtonPressed(Button.B, function () {
    a += 1
    if (a == 0) {
        led.unplot(1, 4)
        led.plotBrightness(2, 4, 255)
    }
    if (a == -1) {
        led.unplot(0, 4)
        led.plotBrightness(1, 4, 255)
    }
    if (a == 1) {
        led.unplot(2, 4)
        led.plotBrightness(3, 4, 255)
    }
    if (a == 2) {
        led.unplot(3, 4)
        led.plotBrightness(0, 4, 255)
    }
})
let a = 0
a = 0
let b = 0
led.plotBrightness(2, 4, 255)
loops.everyInterval(500, function () {
    b += 1
    if (b == 1) {
        led.plotBrightness(0, 0, 255)
    }
    if (b == 2) {
        led.plotBrightness(0, 2, 255)
    }
    if (b == 3) {
        led.plotBrightness(0, 2, 255)
    }
    if (b == 4) {
        led.plotBrightness(0, 3, 255)
    }
    if (b == 5) {
        led.plotBrightness(0, 4, 255)
    }
    if (b == 6) {
        b = 0
    }
})

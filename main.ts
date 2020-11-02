let x = 0
let tail = 0
let head = 0
let i = 4
while (i >= -4) {
    if (i >= 0) {
        head = 4
        tail = i
    } else {
        head = 4 + i
        tail = 0
    }
    x = tail
    while (x <= head) {
        led.plot(x, x - i)
        x += 1
    }
    basic.pause(100)
    basic.clearScreen()
    i += 0 - 1
}
basic.forever(function () {
	
})

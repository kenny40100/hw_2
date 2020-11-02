x = 0
tail = 0
head = 0
i = 4
while i >= -4:
    if i >= 0:
        head = 4
        tail = i
    else:
        head = 4 + i
        tail = 0
    x = tail
    while x <= head:
        led.plot(x, x - i)
        x += 1
    basic.pause(100)
    basic.clear_screen()
    i += 0 - 1

def on_forever():
    pass
basic.forever(on_forever)

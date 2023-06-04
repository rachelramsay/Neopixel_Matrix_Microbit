input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.show()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
// Define colors
let black = neopixel.rgb(0, 0, 0)
let yellow = neopixel.rgb(255, 255, 0)
// Define smiley face pattern
let smileyFace = [
black,
black,
yellow,
yellow,
yellow,
yellow,
black,
black,
black,
yellow,
black,
black,
black,
black,
yellow,
black,
yellow,
black,
yellow,
black,
black,
yellow,
black,
yellow,
yellow,
black,
black,
black,
black,
black,
black,
yellow,
yellow,
black,
yellow,
black,
black,
yellow,
black,
yellow,
black,
yellow,
black,
black,
black,
black,
yellow,
black,
black,
black,
yellow,
yellow,
yellow,
yellow,
black,
black,
black,
black,
black,
black,
black,
black,
black,
black
]
// Show smiley face on the NeoPixel matrix
strip.setBrightness(50)
strip.showColor(neopixel.rgb(200, 0, 0))
strip.show()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip.show()
})

// Sound Meter - micro:bit v2 starter program
// A.H. Grindstaff, Blue Valley USD 229
//
// This is Stage 5, the finished version.
// The earlier stages live in the stages/ folder. Build up to this one live,
// one change at a time. Do not paste this whole file in on day one.
//
// What it does:
//   forever      draws a bar graph of how loud the room is right now
//   button A     shows the loudest number heard since the last reset
//   logo touch   resets the loudest number back to 0 and beeps

let peak = 0
let level = 0

input.onButtonPressed(Button.A, function () {
    basic.showNumber(peak)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    peak = 0
    music.play(
        music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)),
        music.PlaybackMode.UntilDone
    )
})

basic.forever(function () {
    level = input.soundLevel()
    if (level > peak) {
        peak = level
    }
    led.plotBarGraph(level, 255)
})

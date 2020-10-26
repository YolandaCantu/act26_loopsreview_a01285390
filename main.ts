let cont_short = 0
let cont_medium = 0
let cont_tall = 0
let add_heights = 0
let height = 0
let average_height = 0
let Team_green = 0
let Team_blue = 0
let Team_red = 0
let dice_number = 0
let Odd_numbers = 0
let even_numbers = 0
let number = 0
let final_number = 0
let obtuse_angles = 0
let angle = 0
let x_num = 0
let y_num = 0
input.onPinPressed(TouchPin.P0, function () {
    cont_short = 0
    cont_medium = 0
    cont_tall = 0
    add_heights = 0
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        add_heights += height
        if (height <= 150) {
            basic.showString("short person")
            cont_short += 1
        } else if (height >= 151 && height >= 170) {
            basic.showString("medium height")
            cont_medium += 1
        } else if (height >= 171) {
            basic.showString("tall person")
            cont_tall += 1
        }
    }
    basic.showString("short persons:")
    basic.showNumber(cont_short)
    basic.showString("medium height:")
    basic.showNumber(cont_medium)
    basic.showString("tall persons:")
    basic.showNumber(cont_tall)
    average_height = add_heights / 30
    basic.showNumber(average_height)
})
input.onButtonPressed(Button.A, function () {
    Team_green = 0
    Team_blue = 0
    Team_red = 0
    for (let index = 0; index < 6; index++) {
        dice_number = randint(1, 6)
        basic.showNumber(dice_number)
        if (dice_number == 1 || dice_number == 3) {
            basic.showString("Team green")
            Team_green += 1
        } else if (dice_number == 2 || dice_number == 5) {
            basic.showString("Team blue")
            Team_blue += 1
        } else {
            basic.showString("Team red")
            Team_red += 1
        }
    }
    basic.showString("Team green:")
    basic.showNumber(Team_green)
    basic.showString("Team blue:")
    basic.showNumber(Team_blue)
    basic.showString("Team red:")
    basic.showNumber(Team_red)
})
input.onButtonPressed(Button.B, function () {
    Odd_numbers = 0
    even_numbers = 0
    for (let index = 0; index < 10; index++) {
        number = randint(1, 100)
        final_number = number % 2
        basic.showNumber(number)
        if (final_number == 0) {
            basic.showString("Even")
            even_numbers += 1
        } else {
            basic.showString("Odd")
            Odd_numbers += 1
        }
    }
    basic.showString("Odd numbers:")
    basic.showNumber(Odd_numbers)
    basic.showString("Even numbers:")
    basic.showNumber(even_numbers)
})
input.onPinPressed(TouchPin.P1, function () {
    obtuse_angles = 0
    for (let index = 0; index <= 10; index++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showNumber(angle)
            basic.showString("Acute")
        } else if (angle == 90) {
            basic.showNumber(angle)
            basic.showString("Straight")
        } else if (angle > 90) {
            basic.showNumber(angle)
            basic.showString("Obtuse")
            obtuse_angles += 1
        }
    }
    basic.showString("Obtuse angles:")
    basic.showNumber(obtuse_angles)
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x_num = randint(0, 5)
        y_num = randint(0, 5)
        led.plot(x_num, y_num)
        if (x_num == y_num) {
            music.playMelody("C D E F G A B C5 ", 250)
        } else {
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        basic.pause(300)
        basic.clearScreen()
    }
})

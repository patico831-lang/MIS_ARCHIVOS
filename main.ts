basic.showIcon(IconNames.Heart)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # . .
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # . . # .
    # . # . .
    # # # . .
    # . . # .
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # # . .
        # . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
})

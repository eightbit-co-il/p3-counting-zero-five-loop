input.onButtonPressed(Button.A, function () {
    ספירה += 1
})
input.onButtonPressed(Button.B, function () {
    ספירה += -1
})
let ספירה = 0
basic.forever(function () {
    if (ספירה > 5) {
        ספירה = 0
    } else if (ספירה < 0) {
        ספירה = 5
    } else {
    	
    }
    basic.showNumber(ספירה)
})

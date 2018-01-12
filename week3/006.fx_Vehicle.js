'use strict'
//6.Create a function called vehicle, like before, but takes another parameter called age,
//so that vehicle("blue", 1, 5) prints "a blue used car"

function vehicle(color, code, age) {
    if (code === 1 && age === 5) {
        console.log("a " + color + " used car\n");
    } else if (code === 2) {
        console.log("a " + color + " used motorbike\n");
    }
}
vehicle("blue", 1, 5);

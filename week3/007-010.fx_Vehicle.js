'use strict'
//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
//ref: https://github.com/HackYourFuture/JavaScript/blob/master/fundamentals/objects.md
let listOfVehicles = {
    1: "car",
    2: "motorbike",
    3: "caravan",
    4: "bike",
    5: "boat"
}
let age
//8.How do you get the third element from that list ?
console.log(listOfVehicles[4]);
//9.Change the function vehicle to use the list of question 7. 
//So that vehicle("green", 3, 1) prints "a green new caravan".
console.log("\ncomplying to question 9\n");
function vehicleType(color, code, age) {
    code = listOfVehicles[code];
    age = age <= 1 ? 'new' : 'used';
    console.log("a " + color + " " + age + " " + code);
}
vehicleType("green", 3, 1);

//Use the list of vehicles to write an advertisement.So that it prints something like:
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

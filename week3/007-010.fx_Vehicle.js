'use strict'
//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
//ref: https://github.com/HackYourFuture/JavaScript/blob/master/fundamentals/objects.md
let listOfVehicles = ["car", "motorbike", "caravan", "bike", "boat"]
let age
//8.How do you get the third element from that list ?
console.log(listOfVehicles[2]);
//9.Change the function vehicle to use the list of question 7. 
//So that vehicle("green", 3, 1) prints "a green new caravan".
console.log("\ncomplying to question 9\n");
function vehicleType(color, code, age) {
    code = listOfVehicles[code-1];
    age = age <= 1 ? 'new' : 'used';
    console.log("a " + color + " " + age + " " + code);
}
vehicleType("green", 3, 1);

//10.Use the list of vehicles to write an advertisement.So that it prints something like:
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
// let code = 0;
// for (code = listOfVehicles[code]; listOfVehicles[6]; code++){
//     age += listOfVehicles[code] + "s, ";
// }
//ref: http://devdocs.io/javascript/global_objects/array/join
let advertisement = "\nAmazing Joe's Garage, we service " + listOfVehicles.join('s, ');

console.log(advertisement.replace(/, boat/g, " and boats."));///, boat/g =>regular expression with global switch
//ref: https://www.youtube.com/watch?v=VRz0nbax0uI&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=6
'use strict';
//const firstName = "Jams";
//let age = 32;
//const speedOfLight = 3e+5;
//age = age + 1;
//age += 1; //short hand of the upper one
//let isSunday = true;

//let typeOfFirstName = typeof firstName; //tuurlijk het string  is
//console.log(typeof typeOfFirstName);
//console.log(firstName, age, "Speed of Light is:" + speedOfLight);
//console.log("My type of data is: "+typeof isSunday)
//console.log(firstName, age, isSunday);
const compOwner = "Jamshid"; //because we use const we can't assign another value to compOwner e.g.: 
const names = ['Jams', 'Jason', 'Elmira', compOwner];
names.push('Sam'); //adds one name to the list
names.unshift('Mahmut'); //adds to the beginning of an array. check devdocs.io/javascript/array/
names[1] = "Jams\(hid\)"; //replaces one name

console.log(names, names.length); //property of length shows the number of array

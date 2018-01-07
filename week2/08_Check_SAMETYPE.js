'use strict' //this is to define clear variables and prevent poor coding

let myAge = 32;
let myAgeIn2018 = "33";
let myMovies = ["The Moving Castle", "3 Idiots", "My Father My Son"];
let myName = "Jamshid";
const married = true;

console.log("the value of my variable is: " + myAge);
console.log("the value of my variable is: " + myAgeIn2018);
console.log("the value of my variable is: " + myMovies);
console.log("the value of my variable is: " + myName);
console.log("the value of my variable is: " + married);
//My initial idea of my variables datatypes
console.log("I think the variables are: '" + myAge + "' = number, " + "'" + myAgeIn2018 + "' = number, " + "'" + myMovies + "' = array string,");
console.log("'" + myName + "' = string, " + "'" + married + "' = boolean\n");
//I use typeof to find the actual type of data
console.log("typeof says: myAge is '" + typeof myAge + "', myAgeIn2018 is: '" + typeof myAgeIn2018 + "', myMovies is: '" + typeof myMovies + "',");
console.log("myName is: '" + typeof myName + "', married is: '" + typeof married + "'");

if (myAge === myAgeIn2018) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
if (myAge === myMovies) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
if (myAge === myName) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
if (myAge === married) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}

if (myAgeIn2018 === myMovies) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
if (myAgeIn2018 === myName) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
if (myAgeIn2018 === married) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}

if (myMovies === myName) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
if (myMovies === married) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}

if (myName === married) {
    console.log("SAME TYPE");
} else {
    console.log("Not the SAME TYPE");
}
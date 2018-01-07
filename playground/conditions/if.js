'use strict'

// const distance = 5;
// if (distance < 10) {
//     console.log("I will take the bike");
// }
// const distance = 10;
// if (distance < 10) {
//     console.log('I will take the bike.');
// } else {
//     console.log('I will go by car.');
// }

// const distance = 5;
// const raining = true;
// if (distance < 10 && !raining) { //and not raining
//     console.log('I will take the bike.');
// } else {
//     console.log('I will go by car.');
// }

// const distance = 46;

// if (distance < 1) {
//     console.log('I will walk.');
// } else if (distance < 10) {
//     console.log('I will take the bike.');
// } else if (distance < 50) {
//     console.log('I will go by car.');
// } else {
//     console.log('I will take the train.');
// }
// const distance = 5;
// const raining = false;
// if (distance < 10) {
//     if (raining) {
//         console.log('I will go public transportation.');
//     } else {
//         console.log('I will walk.');
//     }
// } else {
//     console.log('I will go by car.');
// }

// console.log("done");

// const age = 0.5;

// const conditionOfCar = age < 1 ? 'new' : 'used';
// console.log("car is", conditionOfCar); // comma is equal to +

//----Switch Statement------

const hyfModule = 'JavaScript-1';

switch (hyfModule) {
    case 'HTML/CSS':
        console.log('In this module you will learn HTML and CSS.');
        break;
    case 'JavaScript-1':
        console.log('In this module you will learn Git and JavaScript basics.');
        break;
    case 'JavaScript-2':
        console.log('In this module you will learn about JavaScript in the browser with HTML and CSS.');
        break;
    case 'JavaScript-3':
        console.log('In this module you will learn about Async and API calls.');
        break;
    case 'Node':
        console.log('This module is about building server and CLI applications using Node.');
        break;
    case 'Database':
        console.log('In this module is about Relational and Non-Relational Data and Database Systems.');
        break;
    case 'React':
        console.log('In this module you will to build Single Page Applications using React.');
        break;
    case 'Project':
        console.log('In this final module you will do your graduation project.');
        break;
    default:
        console.log('This module is unknown: ' + hyfModule);
}
console.log("done");
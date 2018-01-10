'use strict'

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("\nThe new array is: blowfish,meerkat,capricorn,giraffe,turtle");
console.log(favoriteAnimals + "\n");

console.log("The array has a length of: ", favoriteAnimals.length);

favoriteAnimals.splice(3, 3, "turtle");
console.log(favoriteAnimals + "\n");

let found = favoriteAnimals.indexOf("meerkat");
console.log("\nThe item you are looking for is at index: ", found);
// console.log(favoriteAnimals.splice(found+1));
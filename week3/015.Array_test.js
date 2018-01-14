'use strict'
//Write some code to test two arrays for equality using == and ===.Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log( (y == x) ? "Yes they are equal==" : "No they are not equal==");

if (String(x) === String(y)) {
    console.log('Yes they are equal===');
} else {
    console.log('No they are not equal===');
}

x.forEach(function (element) {
    console.log(element);
});
y.forEach(function (elem) {
    console.log(elem);
});
//console.log(x.forEach() == y.forEach() ? "Yes they are equal==" : "No they are not equal==");

//What do you think will happen with x == y, x === y and z == y and z == x ? Prove it!
console.log("Do you think x == y ? : " + (x == y));
console.log("Do you think x == y ? : " + (x === y));
console.log("Do you think x == y ? : " + (z == y));
console.log("Do you think x == y ? : " + (z == x));

//Don't cheat! Seriously - try it first.
let is_same = x.length == y.length && x.every(function (element, index) {
    //return element === y[index];
    if (y.indexOf(element) > -1) {
        return element = y[y.indexOf(element)];
    }
});
console.log(is_same);
//https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
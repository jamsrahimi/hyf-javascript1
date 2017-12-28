'use strict' //this is to define clear variables and prevent poor coding

//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
let myMixArray = [1, 2, 3, "a", "b", "c", true, false];
console.log("Testing them OR:")
console.log(myMixArray[2] == myMixArray[3] || myMixArray[0] == myMixArray[6]);
myMixArray.splice(3, 0, 4);
console.log("Adding 4 to the index 3\n" + myMixArray);
myMixArray.push(true);
console.log("Adding another boolean to the end of the array\n" + myMixArray);
console.log("Conclusion: we can add various data types in an array and play with them\n\n")
console.log("10.2 Can you compare infinities ? (Not in Eyad\'s world) - does 6/0 === 10/0? How can you test this?");
let eyad = 6 / 0;
let jams = 10 / 0;
//ref: http://devdocs.io/javascript-number/
console.log("Checking if it is an integer: " + Number.isInteger(eyad) + "\nWhat is it then: " + jams);
console.log("Checking if it is finite: " + Number.isFinite(eyad) + "\nChecking if it is finite: " + Number.isFinite(jams));
console.log("Checking if it is NaN: " + Number.isNaN(eyad) + "\nChecking if it is NaN: " + Number.isNaN(jams));
console.log("Converting it to see its value: " + eyad.valueOf() + "\nChecking and finding out its precision: " + jams.toPrecision());
if (eyad === jams) {
    console.log("\nThey are equal");
} else {
    console.log("They are not equal!");
}
console.log("Their subtraction equals to: " + (eyad - jams));
console.log("====================================>");
console.log("Although mathematically it doesn\'t make sense, but JS says they are equal and beyond my calculation, therefore they are comparable.");
//10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).
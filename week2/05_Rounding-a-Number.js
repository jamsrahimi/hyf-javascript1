'use strict' //this is to define clear variables and prevent poor coding
let z = 7.25;
console.log(z);
//ref:p84-86, https://github.com/Sharique-Hasan/SaylaniBatch2-JavaScript/blob/master/A%20Smarter%20Way%20to%20Learn%20JavaScript.pdf
let a = Math.round(z);
console.log("Rounded to the \'nearest integer\': " + a );

//Compare and printout the highest value
//ref: http://speakingjs.com/es5/ch01.html#basic_math
let highest = Math.max(a,z)
console.log("\nAfter comparison it seems " + highest +" is the highest number");//How can i put highest in "quotes" here?

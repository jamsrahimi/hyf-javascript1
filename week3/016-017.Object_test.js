'use strict'
//Take a look at the following code:

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

//Show that changing o2 changes o3(or not) and changing o1 changes o3(or not).
console.log(o1.foo);
console.log(o1['foo']);
console.log(o2.foo);
console.log(o3.foo);
console.log(o1 === o2); //Equality is false

o2.foo = 'kroeg';
console.log(o2.foo);
console.log(o3.foo);

//Does the order that you assign(o3 = o2 or o2 = o3) matter ?
o2 = o3;
console.log(o2.foo);
console.log(o3.foo);
o3 = o2;
console.log(o2.foo);
console.log(o3.foo); //following this test, the order of assignment does not matter.
//    What does the following code return? (And why ?)

let bar = 42;
typeof typeof bar;
console.log(bar);
console.log(typeof bar); //results what is assigned to to bar which is a number
console.log(typeof typeof bar); //
console.log(typeof (typeof bar)); //in both cases, it is interpretation inside the brackets which is string
//‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.

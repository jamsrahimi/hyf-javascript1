'use strict'

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);
console.log("The length of mystirng is:", myString.length,"\n");
//https://www.lynda.com/Programming-Foundations-tutorials/Introduction-regular-expressions/83603/90464-4.html
let comma = /,/g; //I used regular expression with g switch to search all the commas globally.
console.log(myString.replace(comma, " "));  //found "replace" after typing '.' after myString then looked devdocs.io for more explanations

//http://devdocs.io/javascript/global_objects/string/replace
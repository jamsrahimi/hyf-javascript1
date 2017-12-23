console.log('BEFORE loop');

let index = 0;
//var index = 'xyz'; //if you use var then you can reassign it, then it could be problematic it is old now!

while (index < 5) {
    const message = "Index = ";
    console.log(message + index); //if you run it in this stage it will be infinite
    index += 1; //i could write also as index++
}
console.log('AFTER loop');
const monthDays = [
    31, 28,31, 30, 31, 30, 31,31, 30, 31, 30, 31];

let yearLength = 0;
let index = 0;

while (index < monthDays.length) {
    console.log(monthDays[index])
    yearLength += monthDays[index];
    index++;
}

if (yearLength === 365){
console.log('Yes, confirming that it adds up to 365');
} else {
    console.log('Oh no, we have problem, Qodos');
    
}
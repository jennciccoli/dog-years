// My age
const myAge = 37;
// Early years are 0-2
let earlyYears = 2;
// Multiply the early years by 10.5
earlyYears *= 10.5;
// Take away the first two years from early years since it's already accounted for
let laterYears = myAge - 2;
// This will calcualte the number of dog years accounted for by my later years
laterYears *= 4;
// By combining early years and later years this will show my age in dog years
var myAgeInDogYears = earlyYears + laterYears;
// My name
const myName = 'Jenn Bridges'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

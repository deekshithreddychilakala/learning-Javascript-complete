/**
 *
let js = 'amazing';

// if (js === 'amazing') alert('Javascript is ' + js);

console.log(48 * 2 - 12 + 20);

console.log(40+8+23-10);

console.log("JOnas");
console.log(23);

let firstName = "hii";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let country = 'India';
let continent = 'Asia';
let population = '1,417 million';

console.log(country,'\n',continent,'\n',population,'\n ');



let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Hiii');
console.log(typeof null);
console.log(typeof undefined);

javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year); // returns undefined because the variable has not been assigned a value yet

let age = 30;
age = 31;

const birthYear = 1996;
// birthYear = 1997; // this will throw an error because the variable is declared as

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

// Operators
// Arithmetic operators
const now = 2024;
const ageJonas = now - 1991;
const ageSarah = now - 1996;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas/2, 2**3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
console.log(`My name is ${firstName} ${lastName}`);

// Assignment operators
let x = 10 + 5;
let y = x * 2;
x += 10 // x = x + 10
x++;
x--;
console.log(x, y);

// Comparison operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018); // true
*/
// const now = new Date().getFullYear();
// const ageJonas = now - 1991;
// const ageSarah = now - 1996;
// console.log(now - 1991 > now - 2018); // true


// Operator precedence can be found in:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// let x, y;
// x = y = 25 - 10 - 5; // 10
// console.log(x, y); // 10 10

// // average age
// const average = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, average);

// const firstName = 'Jonas';
// const lastName = 'Schemedtmann';
// const job = 'teacher';
// const birthYear = 1991;
// const currentYear = new Date().getFullYear();

// const john = "I'm " + firstName + " " + lastName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
// console.log(john);

// const jonasNew = `I'm ${firstName} ${lastName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(jonasNew);

// const age = 19;
// const legalAge = 18;

// if (age >= legalAge) {
//     console.log('allowed 🚗');
// } else {
//     console.log('not allowed 🚫');
// }

// const inputYear = '1991';
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);
// console.log(Number('JOHN'));

// // type coercion
// console.log('I am ' + 29 + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' * 2);

// let n = '1'+1;
// n = n -1;
// console.log(n);

// const money = 0;
// if (!money) {
//     console.log('No Money!!!');
// } else {
//     console.log('Don\'t spend it all ;');
// }

// let height;
// if (height) {
//     console.log('height is defined');
// } else {
//     console.log('height is undefined');
// }

// const age = 18;
// if (age === 18) {
//     console.log('adult');
// } else {
//     console.log('not adult');
// }

// const favNum = prompt("what's your fav number");
// console.log(favNum);
// console.log(typeof favNum);
// if (favNum === 23) {
//     console.log('hi')
// } else {
//     console.log('hello')
// }

// const hasDriversLicence = true;
// const hasGoodVision = false;
// console.log(hasDriversLicence && hasGoodVision)
// console.log(hasDriversLicence || hasGoodVision)
// console.log(!hasDriversLicence)

// const shouldDrive = hasDriversLicence && hasGoodVision;
// console.log(shouldDrive)

// const day = 'monday';
// switch (day) {
//     case 'monday':
//         console.log('monday')
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     default:
//         console.log('A DaY');
//         break;
// }

// const age = 23;
// age >= 18 ? console.log('🥲') : console.log('🥸');
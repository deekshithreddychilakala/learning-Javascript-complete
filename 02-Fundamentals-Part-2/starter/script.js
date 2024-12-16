'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//     console.log('I can drive');
// }

// function logger() {
//     console.log('name is logger function');
// }

// logger();
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(3, 5));
// console.log(fruitProcessor(4, 5));
// console.log(fruitProcessor(2, 6));
// console.log(fruitProcessor(5, 1));

// function calcAge1(birthYear) {
//     return new Date().getFullYear() - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return new Date().getFullYear() - birthYear;
// }

// const age2 = calcAge2(1996);

// console.log(age2);

// const calcAge3 = birthYear => new Date().getFullYear() - birthYear;

// console.log(calcAge3(1999));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge3(1996);
//     return `${firstName} retires in ${65 - age} years.`;
// }

// console.log(yearsUntilRetirement(1996, 'Deekshith'));

// function curFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = curFruitPieces(apples);
//     const orangePieces = curFruitPieces(oranges);
//     const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 5));

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends.at(0));
console.log(friends.length);
console.log(friends[friends.length - 1]);
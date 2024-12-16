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

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends.at(0));
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Michal';
// const jonas = [firstName, 'Schmedtmann', 2024 - 1991, 'teacher', friends];
// console.log(jonas)
// console.log(jonas.length)

// const calcAge = function (birthYear) {
//     return new Date().getFullYear() - birthYear;
// }

// const years = [1990, 1996, 1967, 2002, 2020, 2018];

// console.log(calcAge(years[1]));

// const friends = ['Micheal', 'Steven', 'Peter'];

// friends.push('Jay');

// friends.unshift('John')
// console.log(friends);

// // remove elements
// const popped = friends.pop();
// console.log(popped)
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('asf'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('sdg'));
// console.log(friends.includes(23));

// if (friends.includes('Peter')) {
//     console.log('Peter exists');
// } else {
//     console.log('No Peter')
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2024 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2024 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const userChoice = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends.');
// console.log(jonas[userChoice] ? jonas[userChoice] : 'Not idea on it');

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(`jonas has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}`)
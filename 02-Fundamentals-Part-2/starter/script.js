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


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,
//     calcAge: function () {
//         this.age = new Date().getFullYear() - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//         return this.summary;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas['age']);

// console.log(jonas.getSummary());

// console.log('lifting weights repetition 1 🏋🏻‍♀️')

// for (let rep = 0; rep < 10; rep++) {
//     console.log(`lifting weights repetition ${rep + 1} 🏋🏻‍♀️`)
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2024 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const typesArray = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i])
//     // typesArray[i] = typeof jonasArray[i];
//     typesArray.push(typeof jonasArray[i]);
// }

// console.log(typesArray);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// function calcAge(year) {
//     return new Date().getFullYear() - year;
// }

// for (let i = 0; i < years.length; i++) {
//     ages.push(calcAge(years[i]));
// }

// console.log(ages);

// continue and break

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2024 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(jonasArray[i]);
// }

// for (let excercise = 1; excercise < 4; excercise++) {
//     console.log('----- starting excersise ---- ', excercise);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log('Lifting weights repetition ', rep, ' 🏋🏻‍♀️');
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log('Lifting weights repetition ', rep, ' 🏋🏻‍♀️');
//     rep++;
// }
'use strict';

// function calcAge(birthYear) {
//     const age = new Date().getFullYear() - birthYear;

//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;

//             // Creating new variable with same name as outer scope's variable
//             const firstName = 'Steven';

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT!';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }

//         // console.log(str); // Error because str is block scoped
//         console.log(millenial); // No Error because var is function scoped
//         // console.log(add(2, 3)); // Error because add is block scoped
//         console.log(output); // Output is changed because output is reassigned in the block scope of if statement
//     }

//     printAge();
//     return age;
// }

// const firstName = 'Jonas';

// calcAge(1991);
// // printAge(); // Error printAge is not defined because it is a local function inside calcAge function

// console.log('--- Hoisting in Practice ---');

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// console.log('--- The this Keyword in Practice ---');


// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this);
// }

// calcAge(1991);


// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this);
// }

// calcAgeArrow(1996);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f(); // Regular function call, this keyword is undefined in strict mode

// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1
//         // const self = this; // self or that

//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         // }

//         // Solution 2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }

//         isMillenial();
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     }
// }

// // jonas.greet();
// jonas.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// addExpr(2, 5);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// addArrow(2, 5);

///////////////////////////////////////
// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica1);
// console.log('After marriage:', marriedJessica);

// jessica = { x: 1, y: 2 }; // Error because jessica is a const variable

// jessica.age = 30;

// Copying objects
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy or Deep clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('John');
jessicaClone.family.push('Mary');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
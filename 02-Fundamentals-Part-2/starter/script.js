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

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(3, 5));
console.log(fruitProcessor(4, 5));
console.log(fruitProcessor(2, 6));
console.log(fruitProcessor(5, 1));
'use strict';

function calcAge(birthYear) {
    const age = new Date().getFullYear() - birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str); // Error because str is block scoped
        console.log(millenial); // No Error because var is function scoped
        // console.log(add(2, 3)); // Error because add is block scoped
        console.log(output); // Output is changed because output is reassigned in the block scope of if statement
    }

    printAge();
    return age;
}

const firstName = 'Jonas';

calcAge(1991);
// printAge(); // Error printAge is not defined because it is a local function inside calcAge function
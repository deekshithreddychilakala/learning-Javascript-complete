'use strict';

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never DO this!
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // };
// }

// const jonas = new Person('Jonas', 1991)

// Person.hey = function () {
//     console.log('Hey There')
// }

// Person.hey()
// jonas.hey()
// // console.log(jonas)

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// // console.log(matilda, jack)

// const jay = 'Jay';
// // console.log(jonas instanceof Person);
// // console.log(jay instanceof Person)

// // Prototypes

// console.log(Person.prototype)
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear)
// }

// jonas.calcAge()
// matilda.calcAge()
// jack.calcAge()

// // console.log(jonas.__proto__)
// // console.log(jonas.__proto__ === Person.prototype)
// // console.log(Person.__proto__)

// // console.log(Person.prototype.isPrototypeOf(jonas))
// // console.log(Person.prototype.isPrototypeOf(matilda))
// // console.log(Person.prototype.isPrototypeOf(jack))
// // console.log(Person.prototype.isPrototypeOf(Person))

// // .prototypeOfLinkedObjects
// Person.prototype.species = 'Homo Sapiens';

// // console.log(jonas.species, matilda.species)
// // console.log(jonas.hasOwnProperty('firstName'))
// // console.log(jonas.hasOwnProperty('species'))

// // console.log(jonas.__proto__)
// // console.log(jonas.__proto__.__proto__)
// // console.log(jonas.__proto__.__proto__.__proto__)

// // console.dir(Person.prototype.constructor)

// const arr = [3, 6, 5, 6, 9, 3];
// // console.log(arr.__proto__ === Array.prototype)
// // console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function () {
//     return [...new Set(this)]
// }

// // console.log(arr.unique())

// const h1 = document.querySelector('h1')
// // console.dir(h1)

// // console.dir(x => x + 1)

// // Challenge 1
// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // DATA CAR 1: 'BMW' going at 120 km/h
// // DATA CAR 2: 'Mercedes' going at 95 km/h

// // GOOD LUCK 😀

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}km/h`);
// }

// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.brake()
// // bmw.accelerate();

// Class expression
// const PersonCl = class{}


// Classes declaration
// class PersonCl {

//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey there 👋')
//         console.log(this)
//     }
// }

// const jessica = new PersonCl('Jessica Davis', '1996');
// console.log(jessica)

// jessica.calcAge()

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //     console.log(`Hey ${this.firstName}`);
// // }

// jessica.greet();

// const walter = new PersonCl('Walter White', 1965)

// const account = {
//     owner: 'jonas',
//     movements: [200, 530, 120, 300],
//     get latest() {
//         return this.movements.slice(-1).pop();
//     }
// };

// console.log(account.latest)

// // console.log(jessica.age)
// PersonCl.hey();

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto);

// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge()
// console.log(steven.__proto__ === PersonProto)

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979)
// sarah.calcAge()


// Challenge 2
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} going at ${this.speed}km/h`)
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} going at ${this.speed}km/h`)
//     }
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//     set speedUS(speed) {
//         return this.speed = speed * 1.6;
//     }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS)
// ford.accelerate()
// ford.accelerate()
// ford.brake()
// ford.speedUS = 50;
// console.log(ford.speed)


// !INHERATANCE BETWEEN CLASSES - Constructor
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype)
// // Student.prototype = Person.prototype

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike)
// mike.calcAge()
// // console.log(Person.hasOwnProperty('firstName'))
// console.log(mike.__proto__)

// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)

// Challenge 3
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}km/h`);
// }

// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }


// EV.prototype = Object.create(Car.prototype);
// // EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`);
// }

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);

// console.log(tesla)

// tesla.brake();
// tesla.accelerate()


// !INHERATANCE BETWEEN CLASSES - ES6 Classes
// class PersonCl {

//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey there 👋')
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`)
//     }

//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel ore like ${2037 - this.birthYear + 10}`);
//     }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// // const martha = new StudentCl('Martha Jones', 2012);
// martha.calcAge()
// martha.introduce()


// !INHERATANCE BETWEEN CLASSES - Object.create
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge()

// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.pin = pin;
//         this.movements = [];
//         this.locale = navigator.language

//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     deposit(val) {
//         this.movements.push(val)
//     }

//     withdrawal(val) {
//         this.deposit(-val)
//     }

//     approveLoan(val) {
//         return true;
//     }
//     requestLoan(val) {
//         if (this.approveLoan(val)) {
//             this.deposit(val)
//             console.log('Loan Approved')
//         }
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250)
// acc1.withdrawal(140)
// acc1.requestLoan(3000)

// console.log(acc1);
// console.log(acc1.pin);

// !Encapsulation

// Public fields
// private fields\
// public methods
// private methods
// static version of these 4

// class Account {

//     locale = navigator.language;
//     bank = 'Bankist';
//     #movements = [];
//     #pin;

//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;

//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     // public interface API
//     getMovements() {

//         return this.#movements;
//         // !This method is not chainable
//     }

//     deposit(val) {
//         this.#movements.push(val)
//         return this;
//     }

//     withdrawal(val) {
//         this.deposit(-val)
//         return this;
//     }

//     #approveLoan(val) {
//         return true;
//     }

//     requestLoan(val) {
//         if (this.#approveLoan(val)) {
//             this.deposit(val)
//             console.log('Loan Approved')
//         }
//         return this;
//     }

//     static test() {
//         console.log('test')
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// // acc1.deposit(300);
// // acc1.withdrawal(100);

// const movements = acc1.
//     deposit(300)
//     .withdrawal(100)
//     .withdrawal(50)
//     .requestLoan(25000)
//     .withdrawal(4000)
//     .getMovements();
// console.log(movements)

// acc1['#movements'] = []
// console.log(acc1)
// console.log(acc1.getMovements())
// // console.log(acc1.#approveLoan())
// // console.log(acc1.#pin)

// Account.test()


// Challenge 4

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge
            }`
        );
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();

console.log(rivian.speedUS);
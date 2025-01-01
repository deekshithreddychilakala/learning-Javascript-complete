'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard'
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic'
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, index) {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${movType}">${index + 1} ${movType}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('beforeend', html)
  });
}

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(val => val.at(0)).join('')
  });
  // return user.toLowerCase().split(' ').map(val => val.at(0)).join('');
}

createUserNames(accounts);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
}

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur, 0);

  labelSumInterest.textContent = `${interest}€`
}

const updateUI = function (account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account)
}


// Event Listeners
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ').at(0)}`;
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Display Balance, Summary, Movements
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAccount && currentAccount.balance >= amount && receiverAccount?.username !== currentAccount.username) {
    // Transfers
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > 0 && mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const accIndex = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(accIndex, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
})

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(1, -2))
// console.log(arr.slice())
// console.log([...arr]);

// // SPLICE
// console.log(arr.splice(2));
// arr.splice(1, 2);
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join(' - '))

// const arr = [23, 11, 64];
// console.log(arr[0])
// console.log(arr.at(0))

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// console.log('jonas'.at(3))
// console.log('jonas'.at(-2))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// if (movement > 0) {
//   console.log(`You deposited ${movement}`);
// } else {
//   console.log(`You withdrew ${Math.abs(movement)}`);
// }
// }

// movements.forEach(function (movement) {
// if (movement > 0) {
//   console.log(`You deposited ${movement}`);
// } else {
//   console.log(`You withdrew ${Math.abs(movement)}`);
// }
// });

// movements.forEach(function (movement, index, arr) {
//   console.log(arr)
// if (movement > 0) {
//   console.log(`Movement ${index + 1} You deposited ${movement}`);
// } else {
//   console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
// }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (val, key, map) {
//   console.log(`${key} - ${val}`)
// })

// const currenciesUniq = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUniq.forEach(function (val, key, set) {
//   console.log(`${key} - ${val}`)
// })

// const eurToUsd = 1.1;
// const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements)
// console.log(movementsUSD)

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((movement, index, arr) => `Movement ${index + 1} You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(movement)}`);
// console.log(movementDescriptions)


// const deposits = movements.filter(val => val > 0);
// const withdrawals = movements.filter(val => val < 0);
// console.log(deposits)
// console.log(withdrawals)

// const balance = movements.reduce((acc, cur, index) => {
//   console.log(`Iteration ${index} - accumullator: ${acc}`)
//   return acc + cur
// }, 0);
// console.log(balance)

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// Maximum Value
// const max = movements.reduce((acc, mov) => (mov > acc) ? mov : acc, movements[0]);
// console.log(max)


//  Challenge 2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => age <= 2 ? age * 2 : 16 + age * 4);
//   const adults = humanAges.filter(age => age >= 18);
//   // const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
//   const average = adults.reduce((acc, cur, index, arr) => acc + (cur / arr.length), 0);
//   return average;
// }

// const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(average1, average2)

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepositsUSD);

// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   return ages
//     .map((age) => age <= 2 ? age * 2 : 16 + age * 4)
//     .filter(age => age >= 18)
//     .reduce((acc, cur, index, arr) => acc + (cur / arr.length), 0);
// }

// const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(average1, average2)

// const firstWithDrawal = movements.find(mov => mov < 0);
// console.log(firstWithDrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account)

// console.log(movements)
// const lastWIthdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWIthdrawal)

// const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
// console.log(latestLargeMovementIndex);

// console.log(`Your latest large movement was ${movements.length - 1 - latestLargeMovementIndex} movements ago`)

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// console.log(account4.movements.every(mov => mov > 0))

// const deposit = mov => mov > 0;

// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat())

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat())
// console.log(arrDeep.flat(2))

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements)

// const allMovements = accountMovements.flat()
// console.log(allMovements);

// const overBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log(overBalance)

// const overallBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0)
// console.log(overallBalance2)

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0)
// console.log(overallBalance2)

// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];

// // 1.
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // 2.
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   } `
// );

// // 3.
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// // .flat();
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// // "Matilda and Alice and Bob's dogs eat too much!"
// //  "Sarah and John and Michael's dogs eat too little!"
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // 7.
// console.log(dogs.filter(checkEatingOkay));

// // 8.
// // sort it by recommended food portion in an ascending order [1,2,3]
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// owners.sort()
// console.log(owners)

// console.log(movements);

// // Ascending
// movements.sort((a, b) => a > b ? 1 : -1)
// console.log(movements);

// // Descending
// movements.sort((a, b) => a > b ? -1 : 1)
// console.log(movements);

// console.log(movements.sort((a, b) => a - b));
// console.log(movements.sort((a, b) => b - a));

// console.log(movements);
// const groupedMovements = Object.groupBy(movements, mov => mov > 0 ? 'deposits' : 'withdrawals')
// console.log(groupedMovements)

// const groupedActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;

//   if (movementCount >= 8) return 'Very Active';
//   if (movementCount >= 4) return 'Active';
//   if (movementCount >= 1) return 'Moderate';
//   return 'Inactive'
// });

// console.log(groupedActivity)

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedAccounts);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);
// console.log(x)
// console.log(x.map(() => 5))
// // x.fill(1);

// x.fill(1, 3)
// console.log(x)

// arr.fill(23, 2, 6)
// console.log(arr)

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y)

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);



// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), ele => Number(ele.textContent.replace('€', '')));
//   console.log(movementsUI);

//   const movementsUI2 = []
// })

// console.log(movements);
// const reversedMov = movements.toReversed()
// console.log(reversedMov);

// toSorted() - sort, toSpliced() - splice

// movements[1] = 2000;

// const newMovements = movements.with(1, 2000);
// console.log(newMovements)
// console.log(movements);


// Array Methods Practice
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0)
// console.log(bankDepositSum);

// // const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0);
// console.log(numDeposits1000)

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => {
//     // (cur > 0 ? acc.deposits += cur : acc.withdrawals += cur)
//     acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//     return acc;
//   },
//     { deposits: 0, withdrawals: 0 });
// console.log(sums);

// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => exceptions.includes(word) ? word : capitalize(word))
//     .join(' ')
//   return capitalize(titleCase);
// }

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is long title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Challenge 5


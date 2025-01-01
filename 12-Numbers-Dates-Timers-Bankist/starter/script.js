'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-12-28T17:01:17.194Z',
    '2024-12-31T11:35:19.033Z',
    '2025-01-01T11:35:19.033Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;


  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);

  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`
  return new Intl.DateTimeFormat(locale).format(date);
}

const formatCurrency = function (currencyValue, locale, currencyType) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyType }).format(currencyValue);
}

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = account.movements.map((mov, i) => ({ movement: mov, movementDate: account.movementsDates.at(i) }));

  // const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;
  if (sort) {
    combinedMovsDates.sort((a, b) => a.movement - b.movement)
  }


  combinedMovsDates.forEach(function (mov, i) {
    const { movement, movementDate } = mov
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMovement = formatCurrency(movement, account.locale, account.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurrency(acc.balance, acc.locale, acc.currency)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCurrency(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCurrency(Math.abs(out), acc.locale, acc.currency)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCurrency(interest, acc.locale, acc.currency)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = () => {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);

    // in each call, print the remainign time to UI
    labelTimer.textContent = `${minutes}:${seconds}`;

    // when 0 seconds, stop the timer and log out the user
    if (time <= 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started'
      containerApp.style.opacity = 0;
    }

    // decrease 1 second
    time--;
  };
  // Set time to 5 minutes
  let time = 30;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

const restartTimer = function () {
  // Reset timer
  clearInterval(timer);
  startLogOutTimer();
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(account1);
// containerApp.style.opacity = 100;

// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: '2-digit',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long'
// }
// const locale = navigator.language;
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);


  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'long'
  }
  // const locale = navigator.language;
  labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    restartTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {// Add movement
      currentAccount.movements.push(amount);

      // Add Transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      restartTimer();
    }, 2500)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered'
//     if (i % 3 === 0) row.style.backgroundColor = 'blue'
//   });
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0)
// console.log(.1 + .2)

// console.log(+('23'))
// console.log(+'23')

// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseFloat(' 2.5rem '));
// console.log(parseFloat(' 2.5rem '));
// console.log(Number.isNaN('20'))
// console.log(Number.isNaN(+'20X'))

// console.log(Number.isNaN(23 / 0))

// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))
// console.log(Number.isInteger(23))
// console.log(Number.isInteger(23.0))

// console.log(Math.sqrt(25))
// console.log(25 ** (1 / 2))
// console.log(8 ** (1 / 3))

// console.log(Math.max(5, 18, 23, 11, 2))
// console.log(Math.max(5, 18, '23', 11, 2))
// console.log(Math.max(5, 18, '23px', 11, 2))
// console.log(Math.min(5, 18, 23, 11, 2))
// console.log(Math.PI * (Number.parseFloat('10px') ** 2))
// console.log(Math.trunc(Math.random() * 6) + 1)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// console.log(randomInt(10, 20))
// console.log(randomInt(0, 3))

//Rounding
// console.log(Math.trunc(23.3))
// console.log(Math.round(23.9))
// console.log(Math.ceil(23.2))

// console.log(Math.trunc(-23.3))
// console.log(Math.floor(-23.3))

// Rounding Decimals
// console.log((2.7).toFixed(10))
// console.log(+(2.345).toFixed(2))

// console.log(5 % 2)
// console.log(5 / 2)
// console.log(8 % 3)
// console.log(8 / 3)

// console.log(6 % 2 === 0)

// const isEvent = n => n % 2 === 0;

// console.log(isEvent(8));
// console.log(isEvent(23));
// console.log(isEvent(514));
// console.log(isEvent(514.34436));

// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter)

// const price = 245_99;
// console.log(price)

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.1414;
// console.log(PI)

// console.log(Number('230_000'))
// console.log(parseInt('230_000'))

// console.log(2 ** 52 - 1)
// console.log(2 ** 52 + 1)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(BigInt(4854321489432123476485356245724532452364357))

// operations on BigInt
// console.log(10000n + 10000n)
// console.log(2457235472456254624573458246234624572457n + 10000n)
// const huge = 202221354237634257324572642354327638356n;
// const num = 23;
// console.log(huge * BigInt(num))
// console.log(20n > 15);
// console.log(20n === 20)

// // console.log(huge + ' is REALLY Big')

// console.log(10n / 3n);

// Create Date
// const now = new Date()
// console.log(now)

// console.log(new Date('Wed Jan 01 2025'))
// console.log(new Date('February 30, 2024'))
// console.log(new Date(account1.movementsDates[0]))

// console.log(new Date(2037, 10, 19, 15, 23, 5))
// console.log(new Date(2037, 10, 31))
// console.log(new Date(0))

// console.log(new Date(3 * 24 * 60 * 60 * 1000))

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future)
// console.log(future.getFullYear())
// // console.log(future.getYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString())
// console.log(future.getTime())

// console.log(new Date(2142237180000))
// console.log(Date.now())

// future.setFullYear(2040)
// console.log(future)

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future)
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4, 10, 8));
// console.log(days1)

// const num = 322884764.23;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR'
// }

// console.log(new Intl.NumberFormat('en-US', options).format(num))
// console.log(new Intl.NumberFormat('de-DE', options).format(num))
// console.log(new Intl.NumberFormat('ar-SY', options).format(num))
// console.log(new Intl.NumberFormat(navigator.language, options).format(num))

// const ingredients = ['olives', 'spinach']
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients);
// console.log('Waitng...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval(function () {
//   const now = new Date();
//   console.log(now)
// }, 1000)
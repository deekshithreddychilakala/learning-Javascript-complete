// // Importing module
// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // import * as ShoppingCart from './shoppingCart.js';

// // console.log('Importing module');

// // // addToCart('bread', 5);
// // ShoppingCart.addToCart('bread', 5);

// // // console.log(price, tq)
// // console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import add, { cart } from './shoppingCart.js'

add('pizza', 2)
add('bread', 5)
add('apples', 4)

console.log(cart)
// // console.log('Start fetching')

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data)
// // console.log('Some Data received')

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     // console.log(data)
//     return { title: data.at(-1).title, text: data.at(-1).body };
// }

// const lastPost = getLastPost();

// console.log(lastPost)

// // lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

// const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// }

//     const orderStock = function (product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`);
//     }

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     };
// })()

// ShoppingCart2.addToCart('apple', 4)
// ShoppingCart2.addToCart('pizza', 2)
// console.log(ShoppingCart2)
// console.log(ShoppingCart2.shippingCost)

// CommonJS Modules

// THis may work in Node

// EXPORT
// export.addTocart.function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// }

// IMPORT
// const {addTocart} = require('./shoppingCart');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from "lodash";

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 2 }
    ],
    user: { loggedIn: true }
};

const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
console.log(stateDeepClone);

state.user.loggedIn = false;

if (module.hot) {
    module.hot.accept()
}


class Person {
    greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}

const jonas = new Person('Jonas');

console.log('jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// poligilling async functions
import 'regenerator-runtime/runtime';
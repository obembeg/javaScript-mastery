let bookPrice = 7500
let quantity = 4

// Total Price

let totalPrice = bookPrice * quantity
bookPrice *= quantity
console.log(bookPrice);
console.log(totalPrice);

// * Remaining Balance after paying from ₦50,000
console.log(50000 % totalPrice);

// 2.
const age = 20;

console.log( age > 18 );
console.log( age === 18 );
console.log(age !== 25);

// 3.
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);
console.log(!isAdmin);



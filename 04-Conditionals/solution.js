const age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}



const temperature = 32;

if (temperature > 30) {
  console.log("Hot");
} else {
  console.log("Cool");
}




const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}




const membership = true;
const bookPrice = 10000;
const discountedPrice = 9000;

if (membership) {
  console.log(`Discounted Price: ₦${discountedPrice}`);
} else {
  console.log(`Price: ₦${bookPrice}`);
}


// Noticed how we a backtick (`) to create a string that can include variables. This is called a template literal. This is a more readable way to include variables in strings than concatenation. For example, instead of writing: console.log("Discounted Price: ₦" + discountedPrice);, we can write: console.log(`Discounted Price: ₦${discountedPrice}`);
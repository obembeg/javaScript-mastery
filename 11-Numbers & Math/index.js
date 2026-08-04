const shirtPrice = 1500;
const trouserPrice = 2000;
const suitPrice = 4000;

const total = shirtPrice * 3 + trouserPrice * 2 + suitPrice * 1;

console.log("Total: ₦" + total);

const average = total / 6;

console.log("Average Price: ₦" + Math.round(average));

console.log("Round Down:", Math.floor(7.9));

console.log("Round Up:", Math.ceil(7.1));

console.log("Lucky Number:", Math.floor(Math.random() * 100));

const shirtPrice = 1500;
const trouserPrice = 2000;
const shirtQuantity = 5;
const trouserQuantity = 3;

const totalShirtCost = shirtPrice * shirtQuantity;
const totalTrouserCost = trouserPrice * trouserQuantity;
const grandTotal = totalShirtCost + totalTrouserCost;

console.log(
  "========================\nKLASSY KLEAN\nLaundry Receipt\n========================",
);

console.log("Shirts: ₦" + totalShirtCost);
console.log("Trousers: ₦" + totalTrouserCost);
console.log("Subtotal: ₦" + grandTotal);

if (grandTotal >= 10000) {
  const discount = grandTotal * 0.1;
  const finalTotal = grandTotal - discount;

  console.log("Discount: ₦" + discount);
  console.log("Total: ₦" + finalTotal);
} else {
  console.log("Total: ₦" + grandTotal);
}

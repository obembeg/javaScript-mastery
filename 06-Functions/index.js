function greetCustomer(name) {
  console.log("Welcome, " + name + "!");
}

greetCustomer("Godwin");
greetCustomer("Ada");

function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(2500, 4);

console.log("Total: ₦" + total);

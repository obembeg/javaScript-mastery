const customerName = "Godwin";
const service = "Dry Cleaning";
const amount = 8500;

const today = new Date();

console.log(
  "========================\n" +
    "KLASSY KLEAN\n" +
    "Laundry Receipt\n" +
    "========================",
);
console.log("Customer:", customerName);
console.log("Service:", service);
console.log("Amount:", amount);

console.log(
  "Date:",
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear(),
);
console.log("Time:", today.getHours() + ":" + today.getMinutes());

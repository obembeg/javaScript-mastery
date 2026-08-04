const customerName = "   Godwin   ";
const businessName = "Klassy Klean Laundry";
const email = "godwin@gmail.com";
const service = "Dry Cleaning";

console.log("Customer:", customerName.trim());
console.log("Contains Laundry:", businessName.includes("Laundry"));
console.log("Valid Email:", email.endsWith(".com"));
console.log("Updated Service:", service.replace("Dry", "Steam"));

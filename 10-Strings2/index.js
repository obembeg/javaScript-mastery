const customerName = "   Godwin   ";
const businessName = "Klassy Klean Laundry";
const service = "Dry Cleaning";
const email = "godwin@gmail.com";

console.log("Trimmed:", customerName.trim());

console.log("Contains Laundry:", businessName.includes("Laundry"));

console.log("Starts with Klassy:", businessName.startsWith("Klassy"));

console.log("Ends with .com:", email.endsWith(".com"));

console.log("Updated Service:", service.replace("Dry", "Steam"));

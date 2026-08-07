
const businessName = "Klassy Klean";

console.log("Global:", businessName);

function printReceipt() {
    const customerName = "Godwin";

    console.log("Business:", businessName);
    console.log("Customer:", customerName);
}

printReceipt();

// console.log(customerName); // Uncomment to see the error

if (true) {
    const service = "Dry Cleaning";
    console.log("Service:", service);
}

// console.log(service); // Uncomment to see the error
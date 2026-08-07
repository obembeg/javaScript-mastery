const businessName = "Klassy Klean";

function processOrder() {
  const customerName = "Godwin";
  const service = "Dry Cleaning";
  const amount = 8500;

  console.log("========================");
  console.log(businessName.toUpperCase());
  console.log("========================");

  console.log("Customer:", customerName);
  console.log("Service:", service);
  console.log("Amount:", amount);
}

processOrder();

// console.log(customerName); // Uncomment to see the error

// This will result in a ReferenceError because customerName is declared inside the processOrder() function. Variables declared inside a function can only be accessed within that function.

function processOrder(customerName) {
  return new Promise((resolve, reject) => {
    console.log(
      "========================\n",
      "KLASSY KLEAN Laundry Service\n",
      "========================\n",
      "Customer:",
      customerName,

      "\n Order received.",
    );

    const orderChecked = true;
    setTimeout(() => {
      if (orderChecked) {
        resolve("Laundry processing...");
      } else {
        reject("Failed to process order");
      }
    }, 2000);
  });
}

const order = processOrder("Godwin");

order
  .then((message) => {
    console.log(message);
    return "Laundry complete.";
  })
  .then((message) => {
    console.log(message);
    return "Order ready for pickup!";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

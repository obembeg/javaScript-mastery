const companyName = "KLASSY KLEAN";
function createLaundryTracker(customerName) {
  let totalOrders = 0;

  return function () {
    totalOrders++;
    console.log(
      "========================\n",
      companyName + "\n========================\n",
      "Customer:",
      customerName,
      "\n",
      "Total Orders:",
      totalOrders,
    );
  };
}

const godwin = createLaundryTracker("Godwin");

godwin();
godwin();
godwin();


// Noticed the use of "+" and "," try use both and see the difference between both for yourself
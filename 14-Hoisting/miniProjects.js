`
Laundry Hoisting Demo

Create a function declaration:

printReceipt();

function printReceipt() {
    console.log("========================");
    console.log("KLASSY KLEAN");
    console.log("========================");
    console.log("Customer: Godwin");
    console.log("Service: Dry Cleaning");
}

Then create a function expression:

const printInvoice = function () {
    console.log("Invoice Printed");
};

Try calling:

printInvoice();

before the declaration.

Observe the error.

Comment out the incorrect call afterward and explain why it failed.
`
`Exercise 1 — Basic Callback

Create:
function sayHello() {
    console.log("Hello from the callback!");
}

Then create:
function runCallback(callback) {
    // execute the callback
}

Call:
runCallback(sayHello);

Expected Output:
Hello from the callback!

---

Exercise 2 — Callback With Data

Create:
function greetCustomer(name) {
    // print Welcome, Godwin!
}

Then create:
function processCustomer(callback) {
    // pass "Godwin" to the callback
}

Expected Output:
Welcome, Godwin!

---

Exercise 3 — Calculator Callback

Create:
function add(a, b) {
    // return or print the result
}

Then:
function calculate(callback) {
    // pass 10 and 5 to the callback
}

Expected Output:
15

---

Exercise 4 — Arrow Callback

Create:
function processLaundry(callback) {
    // execute callback
}

Then:
processLaundry(() => {
    console.log("Laundry processed!");
});

Expected Output:
Laundry processed!

---
`

// Do well to attempt them and achieve the expected outputs

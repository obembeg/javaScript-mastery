# 🚀 Day 16 — Callbacks

Welcome to **Day 16** of JavaScript Mastery. We've just learned **closures**.

Today we're taking the next step where we see that **Functions can be passed into other functions.**
That idea is called a **callback**.

Callbacks are extremely important because they lead us toward:

```text
Callbacks
    ↓
Promises
    ↓
Async / Await
    ↓
APIs
    ↓
Node.js
    ↓
Real applications
```

---

# 🎯 Learning Objectives

By the end of today, you'll understand:

- What a callback is
- Why functions can be passed as arguments
- The difference between `function` and `function()`
- How to execute a callback
- How to pass data to a callback
- Arrow function callbacks
- Synchronous callbacks
- Where callbacks are used in real applications
- The basic idea behind asynchronous callbacks

---

# 🤔 First: What Is a Callback?

Let's forget the complicated definition for a moment.

You already know this:

```javascript
function greet() {
  console.log("Hello!");
}

greet();
```

We call the function with:

```javascript
greet();
```

But JavaScript also allows us to **give the function to another function**.

Look:

```javascript
function greet() {
  console.log("Hello!");
}

function executeFunction(callback) {
  callback();
}

executeFunction(greet);
```

Output:

```text
Hello!
```

What happened?

We passed:

```javascript
greet;
```

into:

```javascript
executeFunction();
```

Then `executeFunction()` ran it:

```javascript
callback();
```

That's a **callback**.

### Simple definition

> **A callback is a function passed into another function so that the other function can execute it.**

---

# 🧠 The Pattern

Remember this:

```text
Function A
    ↓
receives Function B
    ↓
Function A calls Function B
    ↓
Function B is the callback
```

For example:

```javascript
executeFunction(greet);
```

Think:

```text
greet
  ↓
passed into executeFunction
  ↓
callback
  ↓
callback()
  ↓
greet runs
```

---

# ⚠️ Very Important: `greet` vs `greet()`

This is one of the most important things to understand today.

### `greet`

```javascript
executeFunction(greet);
```

Means:

> "Here is the function."

We are **passing** the function.

---

### `greet()`

```javascript
executeFunction(greet());
```

Means:

> "Run the function now and give its result to `executeFunction()`."

We are **calling** the function.

Compare:

```javascript
greet;
```

➡️ The function itself.

```javascript
greet();
```

➡️ Execute the function.

For callbacks, we normally pass:

```javascript
greet;
```

not:

```javascript
greet();
```

---

# 🌍 Real-Life Analogy

Imagine you take your clothes to **Klassy Klean**.

You tell the laundry attendant:

> "When my clothes are ready, call me."

You give them your phone number if they don't have it but you don't stand there repeatedly saying:

> "Call me! Call me! Call me!"

You've simply given them what they need to contact you **when the time comes**.

That's similar to a callback.

You're essentially saying:

> "When you're ready, execute this function."

---

# 📖 A Simple Callback

```javascript
function sayHello() {
  console.log("Hello, Godwin!");
}

function processUser(callback) {
  console.log("Processing user...");

  callback();
}

processUser(sayHello);
```

Output:

```text
Processing user...
Hello, Godwin!
```

Let's break it down.

### Step 1

```javascript
processUser(sayHello);
```

We pass `sayHello` into `processUser`.

### Step 2

Inside:

```javascript
function processUser(callback)
```

`callback` now refers to `sayHello`.

Conceptually:

```text
callback → sayHello
```

### Step 3

Then:

```javascript
callback();
```

Now runs `sayHello()`.

---

# 📖 Callback With Data

A callback can also receive information.

Example:

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

function processCustomer(callback) {
  const customerName = "Godwin";

  callback(customerName);
}

processCustomer(greet);
```

Output:

```text
Hello, Godwin
```

What's happening?

```text
processCustomer(greet)
        ↓
callback = greet
        ↓
customerName = "Godwin"
        ↓
callback(customerName)
        ↓
greet("Godwin")
        ↓
Hello, Godwin
```

This pattern is extremely important.

---

# 📖 Another Example

```javascript
function add(a, b) {
  console.log(a + b);
}

function calculate(callback) {
  callback(10, 5);
}

calculate(add);
```

Output:

```text
15
```

Here:

```javascript
add;
```

is the callback.

`calculate()` receives it and calls:

```javascript
callback(10, 5);
```

which becomes:

```javascript
add(10, 5);
```

---

# 📖 Callback + Arrow Function

Callbacks are often written using arrow functions.

Example:

```javascript
function processOrder(callback) {
  callback();
}

processOrder(() => {
  console.log("Order processed!");
});
```

Output:

```text
Order processed!
```

The arrow function:

```javascript
() => {
  console.log("Order processed!");
};
```

is the callback.

---

# 🧺 Klassy Klean Example

Let's make this practical.

```javascript
function processLaundry(customerName, callback) {
  console.log("Processing laundry for:", customerName);

  callback();
}

function notifyCustomer() {
  console.log("Customer notification sent.");
}

processLaundry("Godwin", notifyCustomer);
```

Output:

```text
Processing laundry for: Godwin
Customer notification sent.
```

The flow:

```text
processLaundry()
       ↓
receives notifyCustomer
       ↓
does its work
       ↓
callback()
       ↓
notifyCustomer()
```

---

# 🔥 Why Are Callbacks Powerful?

Look at this:

```javascript
function processLaundry(customerName, callback) {
  console.log("Processing laundry for:", customerName);

  callback();
}
```

We can give it different callbacks.

### Notification

```javascript
processLaundry("Godwin", notifyCustomer);
```

### Receipt

```javascript
processLaundry("Godwin", printReceipt);
```

### Something else

```javascript
processLaundry("Godwin", sendEmail);
```

The `processLaundry()` function doesn't need to know exactly what should happen afterward.

It simply says:

> "Give me a function and I'll execute it."

That's what makes callbacks useful.

---

# 🔗 Connecting Callbacks to Closures

Remember Day 15?

We learned:

```javascript
function createGreeting(name) {
  return function () {
    console.log("Hello, " + name);
  };
}
```

That returned function is a **closure** because it remembers `name`.

Now look:

```javascript
function execute(callback) {
  callback();
}

const greetGodwin = createGreeting("Godwin");

execute(greetGodwin);
```

We're using **both concepts**.

### Closure

```javascript
const greetGodwin = createGreeting("Godwin");
```

The function remembers:

```text
name = "Godwin"
```

### Callback

```javascript
execute(greetGodwin);
```

We're passing that function into another function.

This is why our lessons build on one another.

---

# ⏱️ Synchronous Callbacks

So far, our callbacks execute immediately.

Example:

```javascript
function processOrder(callback) {
  console.log("Processing...");

  callback();

  console.log("Finished!");
}

processOrder(() => {
  console.log("Order complete!");
});
```

Output:

```text
Processing...
Order complete!
Finished!
```

The callback runs immediately as part of the current operation.

This is called a **synchronous callback**.

Don't worry about asynchronous callbacks yet. We'll study them properly when we reach Promises and Async/Await.

---

# 👀 A Preview of Asynchronous Callbacks

You might have probably seen something like this:

```javascript
setTimeout(() => {
  console.log("Laundry is ready!");
}, 2000);
```

The function:

```javascript
() => {
  console.log("Laundry is ready!");
};
```

is a callback.

We're giving it to `setTimeout()` and saying, essentially:

> "Run this function later."

`2000` means approximately **2,000 milliseconds**, or 2 seconds.

For now, just recognize:

```text
setTimeout
    ↓
receives a function
    ↓
runs the function later
```

We'll properly study asynchronous JavaScript later.

---

# 🌐 Where You'll See Callbacks

Callbacks appear everywhere in JavaScript.

### Array methods

```javascript
numbers.forEach(callback);
```

### Browser events

```javascript
button.addEventListener("click", callback);
```

### Timers

```javascript
setTimeout(callback, 2000);
```

### Node.js

```javascript
fs.readFile("file.txt", callback);
```

And historically, callbacks were heavily used for asynchronous operations.

Eventually you'll learn:

```text
Callbacks
    ↓
Promises
    ↓
Async/Await
```

---

# ⭐ Level Up

Now let's connect multiple callbacks.

```javascript
function receiveOrder(customerName, callback) {
  console.log("Customer:", customerName);
  console.log("Order received.");

  callback();
}

function washLaundry(callback) {
  console.log("Laundry washed.");

  callback();
}

function packageLaundry() {
  console.log("Laundry packaged.");
}
```

Now:

```javascript
receiveOrder("Godwin", function () {
  washLaundry(function () {
    packageLaundry();
  });
});
receiveOrder("Godwin", washLaundry(packageLaundry));
```

Output:

```text
Customer: Godwin
Order received.
Laundry washed.
Laundry packaged.
```

Don't worry if this looks strange.

You have just seen what happens when callbacks become deeply nested.

This can eventually become:

# 😵 Callback Hell

Imagine having:

```text
receiveOrder
    ↓
wash
    ↓
dry
    ↓
iron
    ↓
package
    ↓
notify
    ↓
deliver
```

with each step nested inside another callback.

It becomes difficult to read and maintain.

This is one of the problems that **Promises** help solve.

We'll get there.

---

# 🐛 Common Mistakes

## Mistake 1 — Calling instead of passing

❌ Wrong:

```javascript
runCallback(sayHello());
```

✅ Correct:

```javascript
runCallback(sayHello);
```

---

## Mistake 2 — Forgetting to execute the callback

This:

```javascript
function runCallback(callback) {
  console.log("Running...");
}
```

doesn't actually run the callback.

You need:

```javascript
callback();
```

---

## Mistake 3 — Passing something that isn't a function

```javascript
runCallback("Hello");
```

If `runCallback()` expects a function, `"Hello"` won't work as a callback.

---

# 💡 Best Practices

- Understand the difference between `callback` and `callback()`.
- Give callback functions meaningful names.
- Keep callback logic simple.
- Avoid unnecessary nesting.
- Use arrow functions for short callbacks when appropriate.

---

# 🎤 Questions

1. What is a callback?
2. Why can functions be passed as arguments?
3. What's the difference between `callback` and `callback()`?
4. What is a synchronous callback?
5. Where are callbacks commonly used?
6. What is callback hell?
7. Why were Promises introduced?

Don't worry if you can't answer all of these perfectly yet.

The goal is understanding.

---

# ⭐ Stretch Challenge

Don't run this immediately.

Predict the output:

```javascript
function processOrder(customerName, callback) {
  console.log("Processing order for:", customerName);

  callback(customerName);
}

function completeOrder(name) {
  console.log(name + "'s order is complete!");
}

processOrder("Godwin", completeOrder);
```

Think through it:

```text
processOrder(...)
       ↓
customerName
       ↓
callback(...)
       ↓
completeOrder(...)
```

What will it print?

---

# 📚 Summary

Today you learned that **functions are values**.

That means we can:

```javascript
function greet() {
  console.log("Hello!");
}
```

pass the function:

```javascript
execute(greet);
```

and another function can execute it:

```javascript
function execute(callback) {
  callback();
}
```

That's a callback.

The most important distinction:

```javascript
greet;
```

means:

> The function itself.

While:

```javascript
greet();
```

means:

> Execute the function.

Remember:

```text
Function
   ↓
passed to another function
   ↓
received as callback
   ↓
callback()
   ↓
function executes
```

---

# 📅 Tomorrow — Day 17

We'll begin **Promises**.

You'll discover why JavaScript needed a better way to handle operations that don't finish immediately.

We'll learn:

```javascript
new Promise();
```

then:

```javascript
.then()
```

and:

```javascript
.catch()
```

before eventually connecting everything to:

```javascript
async / await
```

But **don't rush there**.

For today, I want this to become completely natural:

```javascript
someFunction(myFunction);
```

Your brain should immediately recognize:

> **"I'm passing a function into another function so it can execute it."**

Once that clicks, you've got callbacks.

**LFG! 🚀💯**

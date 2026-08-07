# 🚀 Day 14 – Hoisting

Today's topic is one of the most misunderstood concepts in JavaScript:

# 🎈 Hoisting

Many beginners think JavaScript executes code **line by line** exactly as it's written but it doesn't.

Before our code runs, JavaScript first scans parts of it and prepares certain declarations. This behavior is called **hoisting**.

Understanding hoisting will help you avoid mysterious errors and understand why some code works while other code doesn't.

---

# 🎯 Learning Objectives

By the end of today, you'll understand:

* What hoisting is
* How JavaScript reads your code
* Hoisting with `var`
* Hoisting with `let`
* Hoisting with `const`
* Hoisting with function declarations
* Why function expressions behave differently
* Best practices to avoid hoisting confusion

---

# 🤔 What is Hoisting?

**Hoisting** is JavaScript's behavior of moving **declarations** to the top of their scope **before the code executes**.

Think of it like this:

Before JavaScript starts running your program, it first makes a list of all:

* Variables
* Functions

Then it begins executing the code.

> **Important:** JavaScript hoists **declarations**, **not values**.

---

# 🌍 Real-Life Analogy

Imagine you're opening **Klassy Klean** every morning.

Before customers arrive, you first:

* Unlock the shop
* Turn on the lights
* Arrange the machines
* Prepare the counter

Only after preparation do you begin serving customers.

JavaScript does something similar.

Before executing your code, it prepares declarations.

That's hoisting.

---

# 📖 Function Hoisting

Function declarations are fully hoisted.

```javascript
greet();

function greet() {
    console.log("Welcome to Klassy Klean!");
}
```

Output:

```text
Welcome to Klassy Klean!
```

Even though `greet()` is called before the function is written, JavaScript already knows about it.

---

# 📖 Hoisting with `var`

```javascript
console.log(customer);

var customer = "Godwin";
```

Output:

```text
undefined
```

Why?

JavaScript treats it like this:

```javascript
var customer;

console.log(customer);

customer = "Godwin";
```

The declaration is hoisted.

The value is **not**.

---

# 📖 Hoisting with `let`

```javascript
console.log(customer);

let customer = "Godwin";
```

Output:

```text
ReferenceError
```

Unlike `var`, `let` is hoisted but **cannot be accessed before its declaration**.

This period is called the **Temporal Dead Zone (TDZ)**.

For now, just remember:

> Never use a `let` variable before declaring it.

---

# 📖 Hoisting with `const`

```javascript
console.log(price);

const price = 8500;
```

Output:

```text
ReferenceError
```

`const` behaves like `let`.

Always declare it before using it.

---

# 📖 Function Expressions

Consider this code:

```javascript
greet();

const greet = function () {
    console.log("Hello!");
};
```

Output:

```text
ReferenceError
```

Why?

Because `greet` is a variable.

The function isn't available until after the assignment.

This is different from a **function declaration**.

---


# 🐛 Common Mistakes

## Mistake 1

Calling a function expression before it's assigned.

```javascript
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

❌ `ReferenceError`

---

## Mistake 2

Using `let` before declaration.

```javascript
console.log(name);

let name = "Godwin";
```

❌ `ReferenceError`

---

## Mistake 3

Thinking `var` keeps its value.

```javascript
console.log(age);

var age = 25;
```

Output:

```text
undefined
```

Not `25`.

---

# 💡 Best Practices

* Always declare variables before using them.
* Prefer `const` and `let` over `var`.
* Declare functions before calling them (even though declarations are hoisted).
* Don't rely on hoisting—it makes code harder to read.

---

# 🌍 Real-World Use

Understanding hoisting helps when working with:

* React components
* Express applications
* Large codebases
* Debugging `ReferenceError`s
* Reading legacy JavaScript code

---

# 🎤  Questions

1. What is hoisting in JavaScript?
2. Are values hoisted?
3. Why does `var` print `undefined`?
4. Why do `let` and `const` throw `ReferenceError`?
5. Why can function declarations be called before they appear in the file?

---

# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
console.log(course);

var course = "JavaScript";

sayHello();

function sayHello() {
    console.log("Welcome!");
}

const greet = function () {
    console.log("Hi!");
};

// What happens here?
greet();
```

Questions:

1. What does the first `console.log()` print?
2. Why does `sayHello()` work?
3. What would happen if you moved `greet();` above the `const greet = ...` line?

---

# 📅 Tomorrow – Day 15

We'll learn **Closures**, one of the most powerful features of JavaScript.

You'll discover:

* What a closure is
* Why inner functions remember outer variables
* Private variables
* Real-world closure examples
* How closures are used in React and JavaScript libraries

---



*Don't just memorize the word **hoisting**. Ask yourself for every example, **"What did JavaScript know before it started running my code?"***

If you can answer that, you've understood the concept.

**LFG! 🚀💯**

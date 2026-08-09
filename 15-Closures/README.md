# 🚀 Day 15 – Closures

# 🔒 Closures

# 🎯 Learning Objectives

By the end of today, we'll understand:

* What a closure is
* Why inner functions remember outer variables
* Lexical scope
* Private variables
* Why closures are useful
* Real-world closure examples

---


# 🤔 What is a Closure?

A **closure** happens when

> **An inner function remembers and can use variables from its outer function, even after the outer function has finished running.**

That sounds complicated.

Let's make it simple.

---

# 🌍 Real-Life Analogy

Imagine you're the manager of **Klassy Klean**.

You create a new laundry order.

```text
Customer: Godwin
Order Number: KK001
```

An employee receives that order.

Even after you walk away, the employee still remembers:

* Customer name
* Order number

The employee "closed over" that information.

A closure works the same way.

The inner function remembers variables from the outer function.

---

# 📖 Our First Closure

```javascript
function outer() {
    const message = "Welcome to Klassy Klean!";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

Output:

```text
Welcome to Klassy Klean!
```

Why does `inner()` know what `message` is?

Because it was created inside `outer()`.

---

# 📖 A Real Closure

```javascript
function createGreeting() {
    const message = "Hello, Godwin!";

    return function () {
        console.log(message);
    };
}

const greet = createGreeting();

greet();
```

Output:

```text
Hello, Godwin!
```

Notice something interesting:

`createGreeting()` has already finished running.

Yet `greet()` still remembers `message`.

That's a closure.

---

# 📖 Lexical Scope

Closures work because of **lexical scope**.

This means:

> A function can access variables where it was **created**, not where it is **called**.

Example:

```javascript
const company = "Klassy Klean";

function first() {
    function second() {
        console.log(company);
    }

    second();
}

first();
```

Output:

```text
Klassy Klean
```

---

# 📖 Private Variables

Closures let us hide data.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

Notice:

Nobody outside can directly change `count`.

It is private.

---

# 🐛 Common Mistakes

## Mistake 1

Thinking variables disappear immediately.

```javascript
function test() {
    const name = "Godwin";

    return function () {
        console.log(name);
    };
}
```

`name` is still available because of the closure.

---

## Mistake 2

Expecting each closure to share the same variables.

```javascript
const first = createCounter();
const second = createCounter();
```

Each counter has its **own** `count`.

---


# 💡 Best Practices

* Use closures to preserve data.
* Keep private variables inside closures.
* Don't expose data unnecessarily.
* Give closure functions meaningful names.

---

# 🌍 Real-World Use

Closures are used in:

* React Hooks
* Event listeners
* Authentication
* Shopping carts
* Timers
* API clients
* Data caching
* State management

You'll see closures again when we learn:

* Callbacks
* Promises
* Async/Await
* React Hooks (`useState`, `useEffect`)
* Express middleware

---

# Questions

1. What is a closure?
2. Why does the inner function remember outer variables?
3. What is lexical scope?
4. What are private variables?
5. Where are closures used in real applications?

---


# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
function createMultiplier(number) {
    return function (value) {
        return value * number;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
```

Questions:

1. What does `double(5)` return?
2. What does `triple(5)` return?
3. Why do `double` and `triple` remember different numbers?

---

# 📅 Tomorrow – Day 16

We'll learn **Callbacks**, which build directly on everything you've learned about functions and closures.

You'll discover:

* What callbacks are
* Why functions can be passed as arguments
* Synchronous callbacks
* Real-world examples
* How callbacks prepare you for asynchronous JavaScript

---

Today's lesson may feel more abstract than the previous ones, and that's normal. Don't rush to memorize the definition of a closure. Instead, ask yourself this question every time you see one:

> **"Which variable is the inner function remembering?"**

If you can answer that, you've understood closures.

**LFG! 🚀💯**

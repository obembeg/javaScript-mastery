# 🚀 Day 4 – Conditional Statements (`if`, `else`, `else if`)

Welcome back, today, your code starts making **decisions**.


# 🎯 Learning Objectives

By the end of today, you'll understand:

* What conditional statements are
* Why they're important
* `if`
* `else`
* `else if`
* Nested `if` statements
* Truthy and Falsy values (Introduction)
* Real-world applications

---


# 🤔 Why Do We Need Conditionals?

Imagine you're building your **Book Store App**.
A user tries to buy a book.
Can everyone buy it?

No.

The app needs to ask questions:

* Is the user logged in?
* Is the book in stock?
* Does the user have enough money to cover the cost of the book?

If all conditions are met: ✅ Complete purchase.

Otherwise: ❌ Show an error.

This is exactly what **conditional statements** do. Think of them as **decision makers**.

---

# Real-Life Analogy

Imagine a security guard.

When someone approaches the gate, he asks:

> "Do you have an ID card?"

If yes... Open the gate.

If no... Don't allow entry.

That's an `if` statement.

---

# The `if` Statement

```javascript
if (condition) {
    // code to execute
}
```

Example:

```javascript
const age = 20;

if (age >= 18) {
    console.log("Access granted.");
}
```

Output:

```
Access granted. Since age is 20 which is greater than 18
```

---

# What if the condition is false?

```javascript
const age = 15;

if (age >= 18) {
    console.log("Access granted.");
}
```

Output:

```
In the above instance, the code inside the braces is skipped. So, output is Nothing or Empty 
```

---

# `if...else`

Now we can handle both outcomes.

```javascript
const age = 15;

if (age >= 18) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}
```

Output:

```
Access denied.
```

---

# `else if`

Sometimes there are more than two possibilities.

Example:

```javascript
const score = 75;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 70) {
    console.log("Very Good");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

Output:

```
Very Good
```

---

# How JavaScript Reads It

Imagine JavaScript asking questions one by one:

```
Is score >= 90?

❌ No

↓

Is score >= 70?

✅ Yes

↓

Print "Very Good"

↓

Stop checking.
```

Once a condition is true, the rest are ignored.

---

# Comparison Operators Review

You'll use these a lot:

```javascript
>
<
>=
<=
===
!==
```

Example:

```javascript
const password = "12345";

if (password === "12345") {
    console.log("Correct password");
}
```

---

# Logical Operators

Sometimes multiple conditions are needed.

AND (`&&`)

```javascript
const isLoggedIn = true;
const hasSubscription = true;

if (isLoggedIn && hasSubscription) {
    console.log("Access granted.");
}
```

Both must be true.

---

OR (`||`)

```javascript
const isAdmin = false;
const isOwner = true;

if (isAdmin || isOwner) {
    console.log("You can edit this book.");
}
```

Only one needs to be true.

---

NOT (`!`)

```javascript
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}
```

---

# 🐛 Debugging Corner

What do you think this prints?

```javascript
const age = "18";

if (age === 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}
```


Ask yourself:

* Is `"18"` the same as `18`?
* Think back to **Day 3** (`==` vs `===`).

---

# 🌟 Best Practices

* Keep conditions simple and readable.
* Use `===` instead of `==`.
* Avoid deeply nested `if` statements when possible.
* Use meaningful variable names.

---





# ⭐ Stretch Challenge

Predict the output before running:

```javascript
const age = 20;
const hasID = false;

if (age >= 18 && hasID) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}
```
Write your prediction first, then run it.,

---

## 🧠 Mentor's Challenge

You're four days into the journey. Don't rush ahead.

If you can explain **variables, data types, operators, and conditionals** to a complete beginner without looking at your notes, you're building the right foundation.

That's the goal not speed, but understanding.


# 📅 What's Next?

Next, we'll learn **Loops**.

Instead of writing the same code over and over, you'll learn how to make JavaScript repeat tasks automatically. We'll also build a mini project that prints multiplication tables and patterns.


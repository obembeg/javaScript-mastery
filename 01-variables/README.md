# LET'S GOOOO!! 🔥🔥🔥

Welcome to **Day 1**.

Today, you're not just learning JavaScript—you've officially started building your engineering foundation.

---

# Day 1: Variables

## 🎯 Learning Objective

By the end of today, you'll understand:

* What variables are
* Why they exist
* How JavaScript stores data
* `let`
* `const`
* `var`
* Naming conventions
* Best practices

---

# Imagine this...

You own **Klassy Klean**.

A customer walks in.

Their name is:

```text
John
```

Tomorrow another customer comes.

Their name is:

```text
Sarah
```

Then another.

```text
David
```

Would you hardcode every customer's name?

Of course not.

Instead, you create a place that can hold **any** customer's name.

That place is called a **variable**.

Think of a variable as a **labeled storage box**.

```
+-------------------+
| Customer Name     |
|-------------------|
| John              |
+-------------------+
```

Tomorrow:

```
+-------------------+
| Customer Name     |
|-------------------|
| Sarah             |
+-------------------+
```

The **box stays the same**.

The **value changes**.

That's exactly what a variable is.

---

# In JavaScript

We create variables like this:

```javascript
let customerName = "John";
```

Read it like English:

> "Create a storage box called `customerName` and put `"John"` inside it."

---

## Why don't we just write `"John"` everywhere?

Imagine this:

```javascript
console.log("John");
console.log("John");
console.log("John");
```

Now John changes his name to Michael.

You'd have to update it everywhere.

Instead:

```javascript
let customerName = "John";

console.log(customerName);
console.log(customerName);
console.log(customerName);
```

Now you only change it once.

---

# Meet the three ways to declare variables

## 1. `let`

```javascript
let age = 25;
```

Later:

```javascript
age = 26;
```

This is allowed.

---

## 2. `const`

```javascript
const country = "Nigeria";
```

Later:

```javascript
country = "Ghana";
```

❌ Error.

`const` means the variable cannot be reassigned after it's created.

---

## 3. `var`

```javascript
var score = 100;
```

This is the old way.

Modern JavaScript rarely uses it.

We'll learn *why* later.

For now...

**Use `let` and `const`.**

---

# Which one should I use?

Use this simple rule:

Can the value change?

YES →

Use `let`

NO →

Use `const`

Professional developers default to `const` unless they know the value needs to change.

---

# Naming Variables

Good:

```javascript
let customerName;
let totalPrice;
let isLoggedIn;
```

Bad:

```javascript
let x;
let abc;
let data;
```

Your variable names should explain what they store.

---

# Best Practices

✅ Use `camelCase`

```javascript
let firstName;
let totalAmount;
let bookTitle;
```

❌ Don't do this

```javascript
let firstname;
let FIRSTNAME;
let first_name;
```

---

# Now let headover to our index.js and see a few examples

---




---

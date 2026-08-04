# 🚀 Day 9 – Strings

# 🎯 Learning Objectives

By the end of today, you will be able to:

* Explain what a string is.
* Create strings.
* Concatenate (join) strings.
* Find the length of a string.
* Access individual characters.
* Change text to uppercase.
* Change text to lowercase.

---

# 📋 Prerequisites

Before today you should understand:

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Conditionals
* ✅ Loops
* ✅ Functions
* ✅ Arrays
* ✅ Objects

---

# 🤔 What is a String?

A **string** is simply **text**.

Examples:

```javascript
const name = "Godwin";
const company = "Klassy Klean";
const city = "Sagamu";
```

Everything inside quotation marks is a string.

---

# 🌍 Real-Life Analogy

Imagine writing on paper.

Whether you write:

* Godwin
* Laundry
* JavaScript

they're all pieces of text.

*A string is JavaScript's way of storing text.*

---

# 📖 Creating Strings

```javascript
const firstName = "Godwin";
const lastName = "Obembe";
```

Print them:

```javascript
console.log(firstName);
console.log(lastName);
```

---

# 📖 Joining Strings (Concatenation)

We've actually done this before.

```javascript
const firstName = "Godwin";
const lastName = "Obembe";

const fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Godwin Obembe
```

Notice the `" "`.

That's a string containing one space.

---

# 📖 String Length

Just like arrays have `.length`,
strings also have `.length`.

```javascript
const language = "JavaScript";

console.log(language.length);
```

Output:

```text
10
```

There are 10 characters.

---

# 📖 Accessing Characters

Strings also use indexes.

Remember:

Indexes start at **0**.

```javascript
const language = "JavaScript";

console.log(language[0]);
```

Output:

```text
J
```

Another example:

```javascript
console.log(language[4]);
```

Output:

```text
S
```

---

# 📖 Uppercase

```javascript
const company = "klassy klean";

console.log(company.toUpperCase());
```

Output:

```text
KLASSY KLEAN
```

---

# 📖 Lowercase

```javascript
const language = "JAVASCRIPT";

console.log(language.toLowerCase());
```

Output:

```text
javascript
```
---

# 🐛 Common Mistakes

## Mistake 1

Forgetting quotation marks.

Wrong:

```javascript
const name = Godwin;
```

Correct:

```javascript
const name = "Godwin";
```

---

## Mistake 2

Using an index that doesn't exist.

```javascript
const city = "Lagos";

console.log(city[20]);
```

Output:

```text
undefined
```

---


# 💡 Best Practices

* Use meaningful variable names.
* Keep text inside quotation marks.
* Remember that strings are case-sensitive.
* Use `.length` instead of counting characters manually.

---

# 🌍 Real-World Use

Strings are used for:

* User names
* Passwords
* Email addresses
* Book titles
* Product names
* Addresses
* Messages
* Search boxes

Without strings, websites couldn't display text.

---

# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
const language = "JavaScript";

console.log(language.length);
console.log(language[0]);
console.log(language[9]);
console.log(language.toUpperCase());
console.log(language.toLowerCase());
```

Write your prediction first, then run it.

---

# 📅 Tomorrow – Day 10

Tomorrow we'll learn **String Methods (Part 2)**, where we'll cover useful methods like:

* `trim()`
* `includes()`
* `startsWith()`
* `endsWith()`
* `replace()`

These are methods you'll use constantly in real-world applications.

---

# 🏆 Mentor's Message

Congratulations, you've now learned the core building blocks of JavaScript:

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Conditionals
* ✅ Loops
* ✅ Functions
* ✅ Arrays
* ✅ Objects
* ✅ Strings

These concepts appear in virtually every JavaScript application you'll ever build.

---

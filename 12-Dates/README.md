# 🚀 Day 12 – Dates

So far, we've learned:

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Conditionals
* ✅ Loops
* ✅ Functions
* ✅ Arrays
* ✅ Objects
* ✅ Strings
* ✅ String Methods
* ✅ Numbers & Math

Today we'll learn one of the most practical topics in programming:

# 📅 Dates

Dates are everywhere in software.

we can use them to:

* Timestamp orders
* Record user registrations
* Track deliveries
* Generate receipts
* Schedule appointments
* Build booking systems

Without dates, most modern applications couldn't function.

---

# 🎯 Learning Objectives

By the end of today, we'll understand:

* What the `Date` object is
* How to create a date using `new Date()`
* How to get the current date and time
* How to extract:

  * Year
  * Month
  * Day
  * Hour
  * Minute
  * Second
* How to display dates in a readable format

---

# 🤔 Why Learn Dates?

Imagine someone places a laundry order at **Klassy Klean**. *I am pretty sure we are familiar with this name already*

We need to store:

* Order date
* Pickup date
* Delivery date

Without dates, we wouldn't know:

* Which order came first
* Whether an order is overdue
* When a customer registered
* When payment was made

Every professional application stores dates.

Examples include:

* WhatsApp messages
* Bank transactions
* Emails
* E-commerce orders
* Hotel bookings
* School portals

---

# 🌍 Real-Life Analogy

Think about a supermarket receipt.

Instead of showing only:

```text
Customer: Godwin
Amount: ₦8,500
```

It also includes:

```text
Date: 05/08/2026
Time: 2:35 PM
```

So we see something like:

```text
Customer: Godwin
Amount: ₦8,500
Date: 05/08/2026
Time: 2:35 PM
```

JavaScript provides that information through the **Date** object.

---

# 📖 Creating Today's Date

Create a Date object:

```javascript
const today = new Date();

console.log(today);
```

Example output:

```text
Wed Aug 05 2026 13:35:42 GMT+0100 (...)
```

**Important:** Your output will always be different because it shows the current date and time.

---

# 📖 Getting the Year

```javascript
const today = new Date();

console.log(today.getFullYear());
```

Output:

```text
2026
```

---

# 📖 Getting the Month

```javascript
console.log(today.getMonth());
```

Output in August:

```text
7
```

Wait…

Why **7** instead of **8**?

Because JavaScript starts counting months from **0**.

| Number | Month     |
| -----: | --------- |
|      0 | January   |
|      1 | February  |
|      2 | March     |
|      3 | April     |
|      4 | May       |
|      5 | June      |
|      6 | July      |
|      7 | August    |
|      8 | September |
|      9 | October   |
|     10 | November  |
|     11 | December  |

To display the month normally:

```javascript
console.log(today.getMonth() + 1);
```

---

# 📖 Getting the Day of the Month

```javascript
console.log(today.getDate());
```

Example output:

```text
5
```

This returns the calendar day (1–31).

---

# 📖 Getting the Hour

```javascript
console.log(today.getHours());
```

Example output:

```text
13
```

JavaScript uses the **24-hour clock**.

---

# 📖 Getting Minutes

```javascript
console.log(today.getMinutes());
```

Example output:

```text
35
```

---

# 📖 Getting Seconds

```javascript
console.log(today.getSeconds());
```

Example output:

```text
42
```

---

# 🐛 Common Mistakes

## Mistake 1

Forgetting the parentheses.

❌ Wrong

```javascript
today.getFullYear;
```

✅ Correct

```javascript
today.getFullYear();
```

---

## Mistake 2

Thinking months start from 1.

```javascript
console.log(today.getMonth());
```

In August, this returns:

```text
7
```

To display the month as humans expect:

```javascript
console.log(today.getMonth() + 1);
```

---


# 💡 Best Practices

* Create one `Date` object and reuse it.
* Remember that months start from **0**.
* Always call date methods with parentheses `()`.

---

# 🌍 Real-World Use

You'll use dates in:

* Laundry orders
* Book App publishing dates
* User registration
* Login history
* Payments
* Delivery tracking
* Notifications
* Booking systems

---


# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
const today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getHours());
```

Which values can you predict exactly, and which depend on **when** the program is run?

---

# 📅 Tomorrow – Day 13

We'll learn **Scope**, one of the most important JavaScript concepts.

You'll discover:

* Global Scope
* Function Scope
* Block Scope
* Variable Shadowing
* Why variables sometimes become inaccessible
* How scope prevents bugs

Understanding scope is a major step toward writing clean, reliable JavaScript.

---

*See you in the next lesson*
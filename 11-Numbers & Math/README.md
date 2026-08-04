# 🚀 Day 11 – Numbers & Math

Today we begin working with **Numbers & the Math object**. This lesson is especially important because you'll use these concepts constantly to calculate prices, discounts, VAT, totals, and receipts.


## 🎯 Learning Objectives

By the end of today, we'll understand:

* Number data type
* Integer vs Decimal numbers
* Arithmetic review
* `Math.round()`
* `Math.floor()`
* `Math.ceil()`
* `Math.random()`
* Practical business calculations

---

# 🤔 Why Learn Math?

Imagine Klassy Klean Laundry Services receives an order.

| Item    |  Price |
| ------- | -----: |
| Shirt   | ₦1,500 |
| Trouser | ₦2,000 |
| Suit    | ₦4,000 |

A customer brings:

* 3 Shirts
* 2 Trousers
* 1 Suit

How much should they pay?

JavaScript needs **math** to answer questions like this.

---

# 🌍 Real-Life Analogy

Think of a cashier.

A cashier must:

* Add prices
* Calculate discounts
* Round totals
* Give change

JavaScript does the same thing.

---

# 📖 Numbers

Numbers can be whole numbers:

```javascript
const age = 25;
```

Or decimal numbers:

```javascript
const price = 2500.50;
```

Both are the **Number** data type.

---

# 📖 Arithmetic Review

Addition

```javascript
console.log(10 + 5);
```

Output:

```text
15
```

Subtraction

```javascript
console.log(10 - 5);
```

Output

```text
5
```

Multiplication

```javascript
console.log(10 * 5);
```

Output

```text
50
```

Division

```javascript
console.log(10 / 5);
```

Output

```text
2
```

Modulus (Remainder)

```javascript
console.log(10 % 3);
```

Output

```text
1
```

---

# 📖 `Math.round()`

Rounds to the nearest whole number.

```javascript
console.log(Math.round(4.4));
```

Output

```text
4
```

```javascript
console.log(Math.round(4.6));
```

Output

```text
5
```

---

# 📖 `Math.floor()`

Always rounds down.

```javascript
console.log(Math.floor(4.9));
```

Output

```text
4
```

---

# 📖 `Math.ceil()`

Always rounds up.

```javascript
console.log(Math.ceil(4.1));
```

Output

```text
5
```

---

# 📖 `Math.random()`

Generates a random decimal number between **0** and **1**.

```javascript
console.log(Math.random());
```

Every time you run it, you'll get a different value.

Example:

```text
0.28473918
```

or

```text
0.91746284
```

---

# 💡 Random Whole Numbers

Multiply and round down.

Example: Random number from **0 to 9**

```javascript
const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);
```

Possible output:

```text
7
```
---

# 🐛 Common Mistakes

### Mistake 1

Expecting `Math.random()` to return a whole number.

```javascript
console.log(Math.random());
```

It returns a decimal.

---

### Mistake 2

Using `Math.floor()` when you actually want normal rounding.

```javascript
Math.floor(4.9);
```

Output:

```text
4
```

Not `5`.

---


# 💡 Best Practices

* Use meaningful variable names.
* Store calculations in variables.
* Avoid repeating numbers throughout your code.
* Round values only when necessary.

---

# 🌍 Real-World Use

You'll use math for:

* Discounts
* VAT
* Invoices
* Banking
* Shopping carts
* Payroll
* Game scores
* Analytics

Every business application relies on calculations.

---


# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
console.log(Math.round(6.5));
console.log(Math.floor(6.9));
console.log(Math.ceil(6.1));

const random = Math.floor(Math.random() * 5);

console.log(random);
```

Which line **cannot** be predicted exactly, and why?

---

# 📅 Tomorrow – Day 12

We'll learn **Dates** in JavaScript.

You'll discover how to:

* Get today's date
* Get the current time
* Extract the year, month, and day
* Calculate simple date differences

These concepts will later help us timestamp laundry orders, record pickup dates, and track customer history.

---

*remember to always complete the **code-along**, **exercises**, and **mini project**, then send me your solutions. I'll review them thoroughly before we move to **Day 12**.* 

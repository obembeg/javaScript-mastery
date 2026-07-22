

# 📅 Day 3: Operators

## 🎯 Learning Objectives

By the end of today, you'll understand:

* What operators are
* Arithmetic operators
* Assignment operators
* Comparison operators
* Logical operators
* Increment (`++`) and Decrement (`--`)
* Operator precedence (BODMAS in programming)

---

# 🤔 Why Do We Need Operators?

Imagine you're building your **Book App**. A user buys books.

You need to calculate:

```
Book 1 = ₦4,500
Book 2 = ₦6,000
Total = ?
```
Without operators, You can't.

Operators allow JavaScript to perform work on data. Think of operators as **verbs**.
Variables are **nouns**.

Example:

```
Variables: Price, Quantity

Operator:
Multiply

Result:
Total Price
```

---

# 1️⃣ Arithmetic Operators

These are the operators you already know from mathematics.

```javascript
const a = 10;
const b = 5;

console.log(a + b);
```

Output

```
15
```

---

Addition

```javascript
10 + 5
```

Result

```
15
```

---

Subtraction

```javascript
10 - 5
```

Result

```
5
```

---

Multiplication

```javascript
10 * 5
```

Result

```
50
```

---

Division

```javascript
10 / 5
```

Result

```
2
```

---

Remainder (Modulo)

```javascript
10 % 3
```

Output

```
1
```

Think of it like this:

```
3 goes into 10 three times.

3 × 3 = 9

10 - 9 = 1
```

The remainder is **1**.

Modulo is incredibly useful.

We'll use it later to determine:

* Odd numbers
* Even numbers
* Pagination
* Cycles

---

# 2️⃣ Assignment Operators

Instead of writing:

```javascript
let score = 10;

score = score + 5;
```

You can write:

```javascript
let score = 10;

score += 5;
```

Both mean:

```
score becomes 15
```

Other examples:

```javascript
score -= 2;
score *= 3;
score /= 2;
```
Guess the answer to the above.........
---

# 3️⃣ Comparison Operators

These compare two values.

```javascript
10 > 5
```

Output

```
true
```

---

```javascript
5 > 10
```

Output

```
false
```

---

Examples

```javascript
10 > 5
10 < 5
10 >= 10
10 <= 20
```

---

Equality

```javascript
5 == "5"
```

Output

```
true
```

Wait...

Why?

Because `==` only compares values after type compulsion.

Instead...

Always use

```javascript
===
```

Example

```javascript
5 === "5"
```

Output

```
false
```

Because

```
Number ≠ String
```

Professional JavaScript developers almost always prefer `===` and `!==`.

---

# 4️⃣ Logical Operators

Imagine a Book App.

A user can borrow a book only if:

* Logged in
* Subscription active

That's:

```javascript
isLoggedIn && hasSubscription
```

Both must be true.

---

OR

```javascript
isAdmin || isOwner
```

Only one must be true.

---

NOT

```javascript
!isLoggedIn
```

If true, becomes false.

---

# 5️⃣ Increment

```javascript
let count = 1;

count++;
```

Now

```
2
```

---

Decrement

```javascript
count--;
```

Now

```
1
```


---

# 🐛 Debugging Corner

Predict before running:

```javascript
console.log(10 + "5");
```

What do you think the output is?

Most beginners say: 15

But it isn't.

We'll discuss **type coercion** after you've predicted the result.

---


# 🌟 Best Practices

✅ Prefer === instead of ==

---

See you in index.js
# 🚀 Day 2 – JavaScript Data Types


We already learned **where data is stored** whis is (variables).

Today, we're learning **what kind of data is being stored**.

Think about it...

If variables are **boxes**, then **data types** tell us **what's inside the box**.

```
📦 Box
└── 🍕 Pizza (String)

📦 Box
└── 27 (Number)

📦 Box
└── true (Boolean)
```

---

# 🎯 Learning Objectives

By the end of today, you'll understand:

* What data types are
* Why data types matter
* The 8 JavaScript data types
* Primitive vs Non-Primitive
* `typeof`
* Common mistakes

---



# 🤔 Why Do Data Types Exist?

Imagine you're moving houses.

Would you pack laptop, milk,television, and eggs together?
No, right?

Each item needs different handling.

Programming is the same.

JavaScript needs to know:

* Is this text?
* Is it a number?
* Is it true or false?
* Is it an object?
* Is it empty?

That information is called the **data type**.

---

# JavaScript's Main Data Types

We'll focus on the most common ones first.

## 1. String

Also called Text.

```javascript
const name = "Godwin";
```

Anything inside quotes is a string.

Examples:

```javascript
"Hello"
"JavaScript"
"123"
```

Notice:

```javascript
"123"
```

is **not** a number.

It's text because it is inside a quote

---

## 2. Number

```javascript
const age = 25;
```

Examples:

```javascript
10
99
3.14
-8
```

No quotes.

---

## 3. Boolean

Only two values exist.

```javascript
true or false
```

Example:

```javascript
const isLoggedIn = true;
```

---

## 4. Undefined

```javascript
let country;
```

Print it:

```javascript
console.log(country);
```

Output:

```
undefined
```

You created the variable...

…but never gave it a value. This means a variable without a value is an undefined variable.....

---

## 5. Null

This one confuses beginners.

```javascript
const middleName = null;
```

This means:

> "There is intentionally no value."

It's different from `undefined`. As null is an intentional absence of value 

---

## 6. Object

Objects store related information together.

```javascript
const person = {
    name: "Godwin",
    age: 25,
    country: "Nigeria"
};
```

We'll spend an entire section on objects later because they're one of the most important concepts in JavaScript.

---

## 7. Array

A list of values.

```javascript
const fruits = [
    "Apple",
    "Orange",
    "Banana"
];
```

Arrays are also objects internally, but think of them as ordered lists for now.

---

# Using `typeof`

JavaScript can tell you the type of a value.

```javascript
console.log(typeof "Hello");
```

Output:

```
string
```

More examples:

```javascript
console.log(typeof 25);
```

```
number
```

```javascript
console.log(typeof true);
```

```
boolean
```

```javascript
console.log(typeof undefined);
```

```
undefined
```

---

# 🐛 Debugging Corner

Predict the output before running it.

```javascript
console.log(typeof "50");
console.log(typeof 50);
```

Are they the same?

No.

Output:

```
string
number
```

This is why quotes matter.

---


## Key Takeaways

- Every value has a data type.
- Strings use quotes.
- Numbers do not.
- Booleans are either `true` or `false`.
- Objects store related information.
- Arrays store lists.

Now, over to `index.js`:
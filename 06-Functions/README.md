# 🚀 Day 6 – Functions

# 🎯 Learning Objectives

By the end of this lesson, you will be able to:

* Explain what a function is.
* Explain why functions are important.
* Declare and call functions.
* Use parameters and arguments.
* Return values from functions.
* Know when to use `console.log()` and when to use `return`.

---

# 📋 Prerequisites

Before starting this lesson, you should understand:

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Conditionals
* ✅ Loops

> **No new concepts outside this list will be used today.**

---

# 🤔 Why Do We Need Functions?

Imagine you're building software for Laundry Firm.

Every receipt ends with:

```text
========================
Thank you for choosing us!
Have a wonderful day!
========================
```

Without functions, you would copy and paste those three lines into every part of your program.

If you later wanted to change the message, you'd have to find and edit every copy.

Instead, write it once and reuse it.

That's exactly what functions are for.

> **A function is a reusable block of code that performs a specific task.**

---

# 🌍 Real-Life Analogy

Think about a washing machine.

You don't rebuild it every time you want to wash clothes.

You simply:

1. Put in the clothes.
2. Press **Start**.
3. The machine performs its job.

A function works the same way.

You call it, and it performs a task.

---

# 📖 Function Declaration

Creating a function is called **declaring** a function.

```javascript
function greet() {
    console.log("Welcome to Klassy Klean Laundry and Cleaning Services!");
}
```

At this point...

**Nothing happens.**

You've only created the function.

---

# 📖 Calling a Function

To make the function run:

```javascript
greet();
```

Output:

```text
Welcome to Klassy Klean Laundry and Cleaning Services!
```

You can call it again.

```javascript
greet();
greet();
greet();
```

Output:

```text
Welcome to Klassy  klean Laundry and Cleaning Services!
Welcome to Klassy  klean Laundry and Cleaning Services!
Welcome to Klassy  klean Laundry and Cleaning Services!
```

Write once.

Reuse forever.

---

# 📖 Parameters

Sometimes a function needs information.

Example:

```javascript
function greetCustomer(name) {
    console.log("Welcome, " + name + "!");
}
```

Here,

```javascript
name
```

is called a **parameter**.

Think of it as an empty box waiting for a value.

---

# 📖 Arguments

Now call the function:

```javascript
greetCustomer("Godwin");
```

Output:

```text
Welcome, Godwin!
```

Here,

```text
"Godwin"
```

is called the **argument**.

Easy way to remember:

| Parameter   | Argument     |
| ----------- | ------------ |
| Placeholder | Actual value |

---

# 📖 Multiple Parameters

Functions can receive more than one value.

```javascript
function printReceipt(customer, amount) {
    console.log(customer + " paid ₦" + amount);
}

printReceipt("Godwin", 12500);
```

Output:

```text
Godwin paid ₦12500
```

---

# 📖 Returning Values

Printing and returning are **not the same thing**.

Example:

```javascript
function add(a, b) {
    return a + b;
}
```

Now:

```javascript
const total = add(15, 5);

console.log(total);
```

Output:

```text
20
```

The function gives the answer back to whoever called it.

---

# 🧠 `console.log()` vs `return`

This is one of the most important concepts in JavaScript.

### Using `console.log()`

```javascript
function add(a, b) {
    console.log(a + b);
}

add(4, 6);
```

Output:

```text
10
```

The answer is displayed, but it **cannot be reused**.

---

### Using `return`

```javascript
function add(a, b) {
    return a + b;
}

const answer = add(4, 6);

console.log(answer);
```

Output:

```text
10
```

Now you can:

* Save it.
* Compare it.
* Use it in another calculation.
* Display it later.

---


# 🐛 Common Mistake

Look carefully.

```javascript
function multiply(a, b) {
    console.log(a * b);
}

const result = multiply(5, 4);

console.log(result);
```

Many beginners expect:

```text
20
20
```

Actual output:

```text
20
undefined
```

Why?

Because the function **prints** the answer but never **returns** it.

Correct version:

```javascript
function multiply(a, b) {
    return a * b;
}
```

---


# 💡 Best Practices

* Give functions meaningful names.
* A function should perform one clear task.
* Use `return` when another part of your program needs the result.
* Keep functions short and readable.

---

# 🌍 Real-World Use

You'll use functions everywhere:

* React components
* Express route handlers
* Database queries
* Authentication
* Form validation
* Payment processing
* Utility helpers
* API calls

Mastering functions is essential for becoming a professional JavaScript developer.

---


---

# 📝 README Task

Create `README.md` using this structure:

```markdown
# Functions

## 🎯 Learning Objectives

## 📋 Prerequisites

## 🤔 Why Do We Need Functions?

## 🌍 Real-Life Analogy

## 📖 Function Declaration

## 📖 Calling a Function

## 📖 Parameters

## 📖 Arguments

## 📖 Return Values

## 💻 Code Along

## 🐛 Common Mistakes

## 🏋 Exercises

## 🚀 Mini Project

## 💡 Best Practices

## 🌍 Real-World Use

## 🎤 Interview Questions

## 📝 Summary

## 🔗 Next Lesson
```

Write it in **your own words**.

---

# 📝 Notes Task (`notes.md`)

Record:

* Three new things you learned today.
* One concept that was difficult.
* One bug you encountered (if any).
* One question you still have.
* Your biggest takeaway.

---


# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
function greet(name) {
    return "Hello, " + name;
}

const message = greet("Godwin");

console.log(message);
console.log(greet("JavaScript"));
```

Write your prediction first, then run the code.

---

# 📅 Tomorrow – Day 7

Tomorrow we'll learn **Arrays**.

You'll discover how to store **multiple related values** in a single variable and use loops to process collections of data. This will be the foundation for managing lists of books, customers, laundry orders, and much more.

---

## 🏆 Mentor's Message

You're no longer just learning JavaScript.

You're building a professional developer's mindset:

* Learn a concept.
* Practice it.
* Apply it.
* Document it.
* Commit it.
* Share it.

That's exactly how strong developers grow.

**See you on Day 7. LFG! 🚀💯**

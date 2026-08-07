# 🚀 Day 13 – Scope

Today, we're learning one of the concepts that separates beginners from professional developers:

# 🌍 Scope

Understanding scope helps you answer questions like:

* Why can I use this variable here but not there?
* Why am I getting `ReferenceError`?
* Why did changing one variable affect another?

Almost every JavaScript bug involving variables comes down to **scope**.

---

# 🎯 Learning Objectives

By the end of today, you'll understand:

* What scope is
* Global Scope
* Function Scope
* Block Scope
* Variable Shadowing
* Why scope prevents bugs
* Best practices for declaring variables

---

# 🤔 What is Scope?

Think of **scope** as a variable's **visibility**. It answers the question:

> **"Where can this variable be accessed?"**

Some variables are available everywhere.

Others only exist inside a function or a block.

---

# 🌍 Real-Life Analogy

Imagine **Klassy Klean**.

The business name is known by everyone.

```text
Business Name: Klassy Klean
```

Every employee knows it. This is like a **global variable**.

Now imagine a customer drops off laundry.

```text
Order Number: KK-001
```

Only the employees handling that order need it. Other customers don't.

That's like a **local variable**.

---

# 📖 Global Scope

A variable declared outside any function or block is **global**.

```javascript
const businessName = "Klassy Klean";

console.log(businessName);
```

Output:

```text
Klassy Klean
```

Because it's global, it can also be used inside a function.

```javascript
const businessName = "Klassy Klean";

function showBusiness() {
    console.log(businessName);
}

showBusiness();
```

Output:

```text
Klassy Klean
```

---

# 📖 Function Scope

Variables created inside a function only exist there.

```javascript
function greet() {
    const message = "Welcome!";
    console.log(message);
}

greet();
```

Output:

```text
Welcome!
```

But this won't work:

```javascript
console.log(message);
```

Output:

```text
ReferenceError: message is not defined
```

Why?

Because `message` only exists inside `greet()` function.

---

# 📖 Block Scope

A **block** is anything inside curly braces `{}`.

Examples:

* `if`
* `for`
* `while`

Variables declared with `let` or `const` inside a block only exist there.

```javascript
if (true) {
    const customer = "Godwin";
    console.log(customer);
}
```

Output:

```text
Godwin
```

Outside the block:

```javascript
console.log(customer);
```

Output:

```text
ReferenceError
```

---

# 📖 Variable Shadowing

A local variable can have the same name as a global variable.

```javascript
const businessName = "Klassy Klean";

function showBusiness() {
    const businessName = "Laundry Services";
    console.log(businessName);
}

showBusiness();

console.log(businessName);
```

Output:

```text
Laundry Services
Klassy Klean
```

The local variable **shadows** the global one while inside the function.

---


# 🐛 Common Mistakes

## Mistake 1

Trying to use a function variable outside its function.

```javascript
function test() {
    const name = "Godwin";
}

console.log(name);
```

❌ Error:

```text
ReferenceError: name is not defined
```

---

## Mistake 2

Trying to use a block variable outside the block.

```javascript
if (true) {
    let amount = 5000;
}

console.log(amount);
```

❌ Error:

```text
ReferenceError
```

---

## Mistake 3

Using `var` instead of `let` or `const`.

```javascript
var name = "Godwin";
```

`var` behaves differently because it isn't block-scoped. We'll discuss `var` in more detail later. For now, stick with **`let`** and **`const`**.

---


# 💡 Best Practices

* Use `const` by default.
* Use `let` only when a value needs to change.
* Avoid `var` in modern JavaScript.
* Keep variables inside the smallest scope possible.
* Use meaningful variable names.

---

# 🌍 Real-World Use

Scope is essential for:

* React components
* Express route handlers
* Database queries
* Authentication
* API development
* Event listeners
* Loops
* Large applications with many files

---

# 🎤 Questions

1. What is scope in JavaScript?
2. What's the difference between global scope and function scope?
3. What is block scope?
4. What is variable shadowing?
5. Why should developers prefer `let` and `const` over `var`?

---

# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
const language = "JavaScript";

function learn() {
    const language = "TypeScript";
    console.log(language);
}

learn();

console.log(language);
```

* What will the first `console.log()` print?
* What will the second `console.log()` print?
* Why?

---

# 📅 Tomorrow – Day 14

We'll learn about **Hoisting**.

You'll discover:

* What hoisting is
* How JavaScript reads your code before executing it
* Why function declarations behave differently from variables
* Common hoisting mistakes and how to avoid them

Understanding hoisting will make many "mysterious" JavaScript behaviors suddenly make sense.

---

*Today's goal isn't just to memorize definitions. When you write your exercises, ask yourself:*

> **"Where does this variable live, and where can it be accessed?"**

*If you can answer that for every variable you create, you've understood scope.*

**LFG! 🚀💯**

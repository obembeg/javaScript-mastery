# 🚀 Day 5 – Loops
Today is a milestone.

So far we've learned how to:

* Store data (Variables)
* Understand data (Data Types)
* Manipulate data (Operators)
* Make decisions (Conditionals)

Now you'll learn how to **repeat tasks without repeating code**.

This is one of the biggest mindset shifts in programming.

---

# 🎯 Learning Objectives

By the end of today, we'll understand:

* What loops are
* Why loops exist
* `for` loops
* `while` loops
* `do...while` loops
* `break`
* `continue`
* Infinite loops
* Real-world uses of loops

---

# 🤔 Why Do We Need Loops?

Imagine a Book Store App has **1,000 books**.

You want to display each title.

Would you write:

```javascript
console.log("Book 1");
console.log("Book 2");
console.log("Book 3");
// down to
console.log("Book 1000");
```

Absolutely not.

Instead, you tell JavaScript:

> "Repeat this action 1,000 times."

That's a **loop**.

---

# 🌍 Real-Life Analogy

Imagine a washing machine.

You don't press the wash button 100 times.

You press **Start** once.

The machine repeats its work until it's done.

A loop works the same way.

---

# The `for` Loop

This is the most common loop in JavaScript.

Syntax:

```javascript
for (initialization; condition; update) {

}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# Breaking It Down

```javascript
for (let i = 1; i <= 5; i++)
```

Let's understand each part.

### Initialization

```javascript
let i = 1;
```

Start counting from 1.

---

### Condition

```javascript
i <= 5
```

Keep going while this is true.

---

### Update

```javascript
i++
```

Increase `i` by 1 after every loop.

---

# Visual Walkthrough

```text
Start

↓

i = 1

↓

Is 1 <= 5?

Yes

↓

Print 1

↓

Increase i

↓

i = 2

↓

Repeat...
```

Eventually:

```text
i = 6

↓

Is 6 <= 5?

No

↓

Stop
```

---

# Countdown Example

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("🚀 Blast Off!");
```

---

# `while` Loop

Use this when you don't know exactly how many times you'll repeat.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

---

# `do...while`

This loop runs **at least once**, even if the condition is false.

```javascript
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);
```

---

# `break`

Stop the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# `continue`

Skip the current iteration.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

---


# 🐛 Debugging Corner

What's wrong with this code?

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Think before running it.

Answer:

The value of `i` never changes.

It creates an **infinite loop**.

Fix:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---


# 🌟 Best Practices

* Prefer `for` loops when you know how many times to repeat.
* Prefer `while` loops when the number of repetitions depends on a condition.
* Always make sure your loop has a way to stop.
* Choose meaningful variable names (`index`, `count`, `item`) instead of single letters when it improves readability.

---

---

# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
```

What numbers will be printed?

Write your prediction first, then run the code.

---

# 📅 Day 6

We'll learn **Functions**, one of the most important concepts in programming.

You'll discover how to package logic into reusable blocks, pass data into functions, and get results back. Functions are the foundation of modern JavaScript, React, Express, and virtually every application you'll build.

---

## 🏆 Mentor's Challenge

Go back to your previous lessons and ask yourself:

> **Could I explain this to a friend without looking at my notes?**

If the answer is "No" it's alright to take a pause and go over it again.
If the answer is "yes," you're not just learning JavaScript—you're building real understanding.

**LFG! 🚀💯**

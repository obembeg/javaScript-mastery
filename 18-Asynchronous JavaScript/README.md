# 🚀 Day 18 — Asynchronous JavaScript

Welcome to **Day 18** of JavaScript Mastery.

Yesterday, we learned **Promises**.

Today, we're going to answer a very important question:

> **What is JavaScript actually doing while it waits for something to finish?**

I strongly believe this is the lesson that will make Promises truly click.

We are **not learning `async/await` yet**. That will be in our next lesson.

Today we'll understand:

* Synchronous vs asynchronous JavaScript
* `setTimeout()`
* The Call Stack
* Asynchronous operations
* The Event Loop
* Promise timing
* Microtasks vs Macrotasks
* How to predict execution order

---

# 🎯 Learning Objectives

By the end of today, you should be able to:

* Explain synchronous code in simple terms.
* Explain asynchronous code in simple terms.
* Understand why `setTimeout()` doesn't block the whole program.
* Understand the basic idea of the Call Stack.
* Understand the basic idea of the Event Loop.
* Understand why Promise callbacks execute before `setTimeout()` callbacks.
* Predict the output of simple asynchronous programs.

---


# 1️⃣ Synchronous JavaScript

Let's start with something we already understand.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

JavaScript executes these statements **one after another**.

Think of it like a queue:

```text
A
↓
B
↓
C
```

JavaScript doesn't move to `B` until `A` has finished.

This is called **synchronous execution**.

### Simple definition

> **Synchronous means things happen one after another, in order.**

---

# 🧠 Another Example

```javascript
console.log("Start");

const total = 10 + 20;

console.log(total);

console.log("End");
```

Output:

```text
Start
30
End
```

Nothing surprising.

JavaScript works through the code from top to bottom.

---

# 2️⃣ What Is Asynchronous JavaScript?

Now look at this:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

You might initially expect:

```text
A
B
C
```

But that's **not** what happens.

You'll get:

```text
A
C
B
```

Why?

Because `setTimeout()` tells JavaScript:

> "Run this function later."

JavaScript doesn't sit there doing nothing for two seconds.

It continues with the rest of the program.

---

# 🌍 Real-Life Analogy

Imagine you run Klassy Klean.

A customer brings clothes for washing.

You tell the washing machine:

> "Start washing these clothes."

The washing machine takes time.

Do you stand there staring at the machine for two hours?

No.

You can:

* Receive another order.
* Answer another customer.
* Process another payment.
* Print another receipt.

When the washing is finished, you deal with it.

That's the basic idea behind asynchronous programming.

---

# 3️⃣ `setTimeout()`

You've already used:

```javascript
setTimeout(() => {
    console.log("Laundry ready!");
}, 2000);
```

Let's understand the pieces.

```javascript
setTimeout(
    function,
    delay
);
```

The first argument is a **function**.

The second argument is the delay in milliseconds.

```text
1000 milliseconds = 1 second
```

So:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

means approximately:

> "Schedule this function to run after about 2 seconds."

### Important

It does **not** mean:

> "Pause JavaScript for two seconds."

That's a very important distinction.

---

# 4️⃣ Let's See It Clearly

Run this:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Laundry ready!");
}, 3000);

console.log("Customer received");

console.log("End");
```

The output will be:

```text
Start
Customer received
End
Laundry ready!
```

Notice:

```text
Start
Customer received
End
```

happens first.

Then, after approximately three seconds:

```text
Laundry ready!
```

---

# 🧠 Why Doesn't `Laundry ready!` Come Immediately?

Because this:

```javascript
setTimeout(() => {
    console.log("Laundry ready!");
}, 3000);
```

doesn't immediately execute the callback.

Instead, the callback is scheduled to run later.

JavaScript continues executing the rest of the code.

---

# 5️⃣ The Call Stack

Now we're going to introduce an important technical term:

## Call Stack

Don't let the name scare you.

Think of the Call Stack as **JavaScript's current to-do pile**.

When JavaScript needs to execute a function, that function goes onto the stack.

For example:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

JavaScript roughly does:

```text
Call Stack

greet()
```

It executes:

```javascript
console.log("Hello");
```

Then `greet()` finishes and leaves the stack.

---

# 🧠 Simple Visualization

For:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Think:

```text
        Call Stack
       ┌───────────┐
       │   greet   │
       └───────────┘
             ↓
        execute code
             ↓
       greet finishes
             ↓
       Stack becomes
          empty
```

For now, that's all we need to understand.

---

# 6️⃣ What Happens With `setTimeout()`?

Consider:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Conceptually:

```text
console.log("A")
      ↓
   Call Stack
      ↓
      A

setTimeout()
      ↓
Schedules callback
      ↓
JavaScript continues

console.log("C")
      ↓
      C

Later...
      ↓
Callback becomes ready
      ↓
console.log("B")
```

That's why:

```text
A
C
B
```

---

# 7️⃣ The Event Loop

Now we introduce another important term:

## Event Loop

The Event Loop helps JavaScript determine:

> **"Is there something waiting to be executed?"**

Very simplified:

```text
             JavaScript
                  │
                  ▼
             Call Stack
                  │
                  ▼
          Is Stack empty?
             │       │
            No      Yes
             │       │
             │       ▼
             │   Check queues
             │       │
             └───────┘
```

The Event Loop keeps checking whether asynchronous callbacks are ready to move back into the Call Stack.

---

# 🧠 Important Rule

A callback waiting to run **cannot just jump into the Call Stack whenever it wants**.

The Call Stack must be available.

That's why JavaScript can continue executing:

```javascript
console.log("C");
```
before the timer callback runs.

---

# 8️⃣ Let's Connect Everything

Consider:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Laundry ready!");
}, 2000);

console.log("End");
```

Think of it like:

```text
console.log("Start")
        ↓
    Call Stack
        ↓
      Start

setTimeout()
        ↓
Timer is scheduled
        ↓
JavaScript continues

console.log("End")
        ↓
    Call Stack
        ↓
       End

      2 seconds
         ↓
Timer callback is ready
         ↓
    Event Loop checks
         ↓
    Call Stack is free
         ↓
Callback enters Stack
         ↓
 Laundry ready!
```

Therefore:

```text
Start
End
Laundry ready!
```

---

# 9️⃣ Promises Enter the Picture

Now we connect this to **Day 17**.

Consider:

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

What happens?

The output is:

```text
A
C
B
```

Why?

Because the Promise callback doesn't execute immediately.

It is scheduled to run after the current synchronous code finishes.

So:

```text
A
↓
C
↓
B
```

---

# 🔟 Microtasks

Now we introduce a new term.

Promise callbacks such as:

```javascript
.then()
```

are placed into a **microtask queue**.

For example:

```javascript
Promise.resolve().then(() => {
    console.log("Promise");
});
```

The callback is scheduled as a microtask.

---

# 1️⃣1️⃣ Macrotasks

For our purposes today, we'll call things such as:

```javascript
setTimeout()
```

callbacks **macrotasks** (often also called tasks).

So:

```text
Promise .then()
       ↓
Microtask

setTimeout()
       ↓
Task / Macrotask
```

---

# ⭐ The Important Rule

After the current synchronous code finishes, JavaScript processes **microtasks before moving on to timer tasks**.

So:

```javascript
console.log("A");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("B");
```

Let's predict it.

First, synchronous code:

```text
A
B
```

Then the Promise callback:

```text
Promise
```

Then the timer:

```text
Timer
```

Final output:

```text
A
B
Promise
Timer
```

---

# 🧠 Don't Memorize Yet

Instead, think:

```text
1. Run normal synchronous code.
2. Check microtasks.
3. Then handle timer/task callbacks.
```

That simple model will help one predict most beginner-level examples.

---

# 1️⃣2️⃣ Promise vs `setTimeout()`

Look carefully:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Let's walk through it.

### Step 1

```javascript
console.log("Start");
```

Output:

```text
Start
```

### Step 2

```javascript
setTimeout(...)
```

The timer is scheduled.

### Step 3

```javascript
Promise.resolve().then(...)
```

The Promise callback is scheduled as a microtask.

### Step 4

```javascript
console.log("End");
```

Output:

```text
End
```

Current output:

```text
Start
End
```

Now synchronous code is finished.

The microtask runs:

```text
Promise
```

Then the timer task:

```text
Timer
```

Final:

```text
Start
End
Promise
Timer
```

---

# 1️⃣3️⃣ `setTimeout(..., 0)` Does NOT Mean Immediately

This is an important beginner mistake.

Look at:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 0);
```

`0` does **not** mean:

> "Run this immediately."

It means approximately:

> "Don't run the callback before this minimum delay; schedule it as a timer task."

It still has to wait for the current synchronous work and relevant queued work to be handled.

---

# 🧪 Execution Order Challenge 1

Don't run this yet.

Predict the output:

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
```

Think carefully.

### Your answer should be:

```text
?
?
?
```

---

# 🧪 Execution Order Challenge 2

Now:

```javascript
console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

console.log("3");
```

Predict:

```text
?
?
?
```

---

# 🧪 Execution Order Challenge 3

Now combine them:

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Don't run it.

Trace it manually.

---

# 🧠 Mental Model

For today's beginner-level examples, use this:

```text
             JavaScript starts
                    ↓
          Run synchronous code
                    ↓
             Stack becomes
                empty
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
     Microtasks            Tasks
     Promise .then()       setTimeout()
          ↓                   ↓
          └─────────┬─────────┘
                    ↓
              More execution
```

The most important part:

> **Promises' `.then()` callbacks are microtasks, and microtasks are processed before timer callbacks.**

---


# ⭐ Stretch Challenge

This one is important.

Don't run it immediately.

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("4");

    setTimeout(() => {
        console.log("5");
    }, 0);
});

console.log("6");
```

Predict the complete output:

```text
?
?
?
?
?
?
```

Then run it.

If you get it wrong, **don't worry**.

This is exactly the type of problem we're using to develop your understanding of the Event Loop.

---

# 🐛 Common Mistakes

### Mistake 1 — Thinking `setTimeout(..., 0)` runs immediately

It doesn't.

```javascript
setTimeout(callback, 0);
```

still schedules the callback to run later.

---

### Mistake 2 — Thinking asynchronous code stops JavaScript

It doesn't.

JavaScript continues executing available synchronous code.

---

### Mistake 3 — Thinking `.then()` runs immediately

This:

```javascript
Promise.resolve().then(callback);
```

schedules the callback as a microtask.

It doesn't execute during the same synchronous step.

---

### Mistake 4 — Memorizing output without understanding the process

Don't just memorize:

```text
A
C
B
```

Instead ask:

> What ran synchronously?

> What was scheduled?

> Which queue did it go into?

> When did the Call Stack become available?

That's how you'll eventually handle more complicated programs.

---

# 🌍 Why This Matters in Real Applications

This isn't just theory.

You'll encounter asynchronous JavaScript when:

### Fetching data

```javascript
fetch("/orders")
```

### Working with databases

```javascript
database.getOrders()
```

### Sending emails

```javascript
sendEmail()
```

### Processing payments

```javascript
processPayment()
```

### Working with files

```javascript
readFile()
```

### React applications

API requests and many user-driven operations are asynchronous.

Understanding this now will make those systems much easier to understand later.

---

# 🎤  Questions

Try answering these without looking back.

### 1.

What is the difference between synchronous and asynchronous code?

### 2.

Does `setTimeout(..., 0)` execute immediately?

### 3.

What is the Call Stack?

### 4.

What is the Event Loop?

### 5.

What is a microtask?

### 6.

Why does a Promise `.then()` callback generally execute before a `setTimeout()` callback?

### 7.

What happens to synchronous code while JavaScript is waiting for an asynchronous operation?


---

# 📅 Tomorrow — Day 19

Now that we understand:

```text
Synchronous JavaScript
        ↓
Asynchronous JavaScript
        ↓
setTimeout()
        ↓
Call Stack
        ↓
Event Loop
        ↓
Promises
        ↓
Microtasks
```

we can finally learn:

# `async / await`

And we'll understand **why it exists**, rather than simply memorizing:

```javascript
async function
```

and:

```javascript
await
```

That's the goal.

---

# 🏆 Today's Mentor Challenge

Don't rush through this lesson.

**Day 18 is more about understanding than writing lots of code.**

Your biggest goal today is to be able to look at:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

and mentally reason:

```text
A
D
C
B
```

without needing to run the program.

Once you can explain **why**, not just predict the output, you're ready for Async/Await.

**Day 18. LFG! 🚀💯**

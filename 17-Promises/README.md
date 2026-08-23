# 🚀 Day 17 — Promises

Welcome to **Day 17** of JavaScript Mastery. we've just learned **callbacks**.

Today, we're going to learn **Promises**.

And I want to keep this one **simple and practical**, just like we did with other lessons.

The goal isn't to memorize complicated definitions.

The goal is for you to look at:

```javascript
someFunction()
    .then()
    .catch()
```

and understand **exactly what is happening**.

---

# 🎯 What we'll Learn

By the end of today, we'll understand:

* What a Promise is
* Why Promises exist
* The three states of a Promise
* `new Promise()`
* `resolve()`
* `reject()`
* `.then()`
* `.catch()`
* `.finally()`
* How Promises improve callback code
* How Promises connect to `async/await`

---

# 🤔 First: Why Do We Need Promises?

Remember our laundry example from the previous lesson:

```javascript
receiveOrder("Godwin", () => {
  washLaundry(() => {
    packageLaundry();
  });
});
```

Imagine adding more steps:

```text
Receive order
      ↓
Wash
      ↓
Dry
      ↓
Iron
      ↓
Package
      ↓
Notify customer
```

The code could become deeply nested:

```javascript
receiveOrder("Godwin", () => {
  washLaundry(() => {
    dryLaundry(() => {
      ironLaundry(() => {
        packageLaundry(() => {
          notifyCustomer();
        });
      });
    });
  });
});
```

😵‍💫

This is difficult to read and maintain.

**Promises give us a cleaner way to handle operations that finish later.**

---

# 🌍 Real-Life Analogy

Imagine you give your laundry to Klassy Klean.

You don't expect the clothes to be ready immediately.

You receive a promise:

> "We've received your clothes. We'll let you know when they're ready."

There are three possible situations:

### 1. Pending

The laundry is still being processed.

```text
Processing...
```

### 2. Fulfilled

The laundry is ready.

```text
Laundry completed!
```

### 3. Rejected

Something went wrong.

```text
Unable to process laundry.
```

That's basically how a Promise works.

---

# 📖 What Is a Promise?

A Promise is an object that represents the **future result of an operation**.

In simple terms:

> **"I don't have the result yet, but I promise to give you the result later."**

For example:

```javascript
const laundryPromise = new Promise();
```

But `new Promise()` needs instructions.

---

# 📖 Creating a Promise

A Promise receives a function.

That function receives two functions:

```javascript
resolve
reject
```

Example:

```javascript
const laundryPromise = new Promise((resolve, reject) => {

});
```

Don't worry about memorizing everything yet.

Think:

```text
Promise
   ↓
Something happens
   ↓
Success → resolve()
Failure → reject()
```

---

# ✅ `resolve()`

`resolve()` means:

> **The operation succeeded.**

Example:

```javascript
const laundryPromise = new Promise((resolve, reject) => {
  resolve("Laundry is ready!");
});
```

Our Promise has now succeeded.

---

# ❌ `reject()`

`reject()` means:

> **Something went wrong.**

Example:

```javascript
const laundryPromise = new Promise((resolve, reject) => {
  reject("Laundry was damaged.");
});
```

The Promise has failed.

---

# 🧠 The Three Promise States

A Promise can have one of three states:

```text
PENDING
   ↓
   ├──→ FULFILLED
   │
   └──→ REJECTED
```

### Pending

Still waiting.

### Fulfilled

Successful.

### Rejected

Failed.

Once a Promise becomes fulfilled or rejected, it is **settled**.

---

# 📖 But How Do We Get the Result?

This is where:

```javascript
.then()
```
comes in.

Suppose:

```javascript
const laundryPromise = new Promise((resolve, reject) => {
  resolve("Laundry is ready!");
});
```

We can use:

```javascript
laundryPromise.then((message) => {
  console.log(message);
});
```

Output:

```text
Laundry is ready!
```

---

# 🧠 Understand the Flow

Look at this:

```javascript
const laundryPromise = new Promise((resolve, reject) => {
  resolve("Laundry is ready!");
});

laundryPromise.then((message) => {
  console.log(message);
});
```

Think about it like this:

```text
new Promise()
      ↓
 resolve("Laundry is ready!")
      ↓
      .then()
      ↓
message
      ↓
console.log(message)
```

That's the basic Promise pattern.

---

# ❌ Handling Errors With `.catch()`

What happens if the Promise fails?

```javascript
const laundryPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});
```

We can catch the error:

```javascript
laundryPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output:

```text
Something went wrong!
```

So remember:

```javascript
.then()
```

handles success.

```javascript
.catch()
```

handles failure.

---

# 🧠 The Pattern to Remember

For now, remember this:

```javascript
promise
  .then((result) => {
    // success
  })
  .catch((error) => {
    // failure
  });
```

That's one of the most important Promise patterns.

---

# ⏰ A Promise That Takes Time

Let's make our example more realistic.

```javascript
const laundryPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("Laundry is ready!");
  }, 2000);

});
```

Now:

```javascript
laundryPromise.then((message) => {
  console.log(message);
});
```

Run it.

You'll wait approximately two seconds.

Then:

```text
Laundry is ready!
```

Why?

Because:

```javascript
setTimeout()
```

delays the operation.

---

# 🔥 This Connects Yesterday's Lesson

Yesterday we learned:

```javascript
setTimeout(() => {
  console.log("Laundry is ready!");
}, 2000);
```

The function inside `setTimeout()` was a **callback**.

Today we're putting that idea inside a **Promise**.

```text
Callback
   ↓
setTimeout
   ↓
Promise
   ↓
.then()
   ↓
Result
```

This is how your previous lessons connect.

---

# 📖 `.finally()`

There's another useful method:

```javascript
.finally()
```

It runs whether the Promise succeeds or fails.

Example:

```javascript
const laundryPromise = new Promise((resolve, reject) => {
  resolve("Laundry completed!");
});

laundryPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Process finished.");
  });
```

Output:

```text
Laundry completed!
Process finished.
```

Think:

```text
.then() → success
.catch() → failure
.finally() → always
```

---

Example:

```javascript
function processLaundry(customerName) {

  return new Promise((resolve, reject) => {

    console.log("Processing laundry for:", customerName);

    setTimeout(() => {
      resolve("Laundry is ready for pickup!");
    }, 2000);

  });

}
```

Then:

```javascript
processLaundry("Godwin")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

Expected:

```text
Processing laundry for: Godwin
```

Then after about 2 seconds:

```text
Laundry is ready for pickup!
```

# 📖 Promise Chaining

One powerful feature of Promises is that you can connect operations.

For example:

```javascript
const order = Promise.resolve("Order received");

order
  .then((message) => {
    console.log(message);
    return "Laundry washed";
  })
  .then((message) => {
    console.log(message);
    return "Laundry packaged";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output:

```text
Order received
Laundry washed
Laundry packaged
```

Notice:

```javascript
return "Laundry washed";
```

is passed into the **next `.then()`**.

---

# 🧠 Think of `.then()` Like a Pipeline

```text
Promise
   ↓
.then()
   ↓
result
   ↓
.then()
   ↓
result
   ↓
.then()
```

This is much cleaner than deeply nesting callbacks.

---

# ⚠️ Important: Don't Confuse These

Remember yesterday:

```javascript
callback
```

means:

> "Here is the function."

While:

```javascript
callback()
```

means:

> "Run the function."

Promises have a similar distinction.

This:

```javascript
promise.then()
```

means you're using the Promise's `.then()` method.

While:

```javascript
resolve()
```

means you're actually settling the Promise successfully.

---

# ⭐ Level Up

Now introduce failure.

```javascript
function processLaundry(customerName) {

  return new Promise((resolve, reject) => {

    console.log("Processing laundry for:", customerName);

    const success = true;

    setTimeout(() => {

      if (success) {
        resolve("Laundry is ready for pickup!");
      } else {
        reject("Laundry processing failed.");
      }

    }, 2000);

  });

}
```

Then handle both:

```javascript
processLaundry("Godwin")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Process finished.");
  });
```

---

# 🧩 Callbacks vs Promises

### Callback approach

```javascript
processLaundry("Godwin", () => {
  console.log("Laundry ready!");
});
```

### Promise approach

```javascript
processLaundry("Godwin")
  .then(() => {
    console.log("Laundry ready!");
  })
  .catch((error) => {
    console.log(error);
  });
```

The Promise version separates:

```text
success
failure
```

more clearly.

---

# 🌍 Where You'll See Promises

Promises are everywhere in modern JavaScript.

### Fetch API

```javascript
fetch("/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### In Database operations

Backend applications commonly use Promise-based database operations.

### In File operations

Node.js provides Promise-based APIs.

### In React

You'll encounter Promises when working with APIs and asynchronous operations.

---

# 🐛 Common Mistakes

### Mistake 1 — Forgetting to return a Promise

If a function is supposed to provide a Promise:

```javascript
function processLaundry() {
  return new Promise(...);
}
```

not simply:

```javascript
function processLaundry() {
  new Promise(...);
}
```

---

### Mistake 2 — Forgetting `.catch()`

If an operation can fail, handle the rejection:

```javascript
promise
  .then(...)
  .catch(...);
```

---

### Mistake 3 — Thinking the Promise pauses JavaScript

This:

```javascript
setTimeout(...);
```

doesn't freeze the entire program.

The operation happens later.

We'll understand asynchronous JavaScript much more deeply in the coming lessons.

---

# 🎤 Questions

1. What is a Promise?
2. What are the three states of a Promise?
3. What does `resolve()` do?
4. What does `reject()` do?
5. What is `.then()` used for?
6. What is `.catch()` used for?
7. What is `.finally()` used for?
8. Why are Promises useful compared with deeply nested callbacks?

---

```text
             Promise
                ↓
             Pending
             /     \
            ↓       ↓
      Fulfilled   Rejected
          ↓           ↓
       .then()     .catch()
                ↓
             .finally()
```

---

# ⭐ Stretch Challenge

Before running this code, predict the output:

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("First message");
});

promise
  .then((message) => {
    console.log(message);
    return "Second message";
  })
  .then((message) => {
    console.log(message);
    return "Third message";
  })
  .then((message) => {
    console.log(message);
  });
```

Expected:

**Don't run it immediately. Think through the chain first.**

---

# 📅 Tomorrow — Day 18

We'll go deeper into **Promises and asynchronous JavaScript**.

We'll learn how JavaScript handles tasks that don't finish immediately, including:

* Synchronous vs asynchronous code
* The event loop
* `setTimeout()`
* Promise timing
* Microtasks vs macrotasks
* Predicting execution order

This will make the behavior of Promises much clearer before we move to:

```javascript
async / await
```

---

## Your Mission Today

Complete:

```text
✅ index
✅ exercises
✅ mini-project
```


**Don't rush Day 17.** The goal isn't to memorize:

```javascript
resolve
reject
then
catch
```

The goal is to understand the flow:

```text
Start operation
      ↓
    Promise
      ↓
   ┌──┴──┐
Success  Failure
   ↓       ↓
.then()  .catch()
   └──┬──┘
      ↓
 .finally()
```

Once that flow feels natural, **Async/Await will make much more sense.**

**LFG! 🚀💯**
# Exercise 1 — Synchronous

Write:

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Predict the output before running it.

---

# Exercise 2 — Timer

Create:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Finished");
}, 2000);

console.log("End");
```

Predict the output.

Then run it and explain **why** the output happens in that order.

---

# Exercise 3 — Promise

Create:

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise finished");
});

console.log("End");
```

Predict the output.

---

# Exercise 4 — Promise + Timer

Predict the output:

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

Then test your answer.

---

# Exercise 5 — Multiple Microtasks

Predict:

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```
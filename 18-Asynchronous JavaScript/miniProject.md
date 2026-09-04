
# 🚀 Mini Project — Laundry Processing Timeline

Build a small program that simulates a laundry order being processed.

Your program should:

### Step 1

Immediately print:

```text
========================
KLASSY KLEAN
========================
Order received.
```

### Step 2

Schedule a timer that prints:

```text
Laundry washing...
```

### Step 3

Create a resolved Promise that prints:

```text
Payment verified.
```

### Step 4

Immediately print:

```text
Order being prepared...
```

Your final output should demonstrate that asynchronous operations don't necessarily execute in the order you wrote them.

It should look like:

```text
========================
KLASSY KLEAN
========================
Order received.
Order being prepared.
Payment verified.
Laundry washing...
```

### Rules

You must use:

* `console.log()`
* `setTimeout()`
* `Promise.resolve()`
* `.then()`

**Do not copy a solution from the lesson.**

Try to reason about the execution order yourself.

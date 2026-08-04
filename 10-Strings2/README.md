# 🚀 Day 10 – String (Part 2: Methods)

# 🎯 Learning Objectives

By the end of today, we will be able to:

* Remove extra spaces with `trim()`
* Check if text contains another text using `includes()`
* Check how text starts with `startsWith()`
* Check how text ends with `endsWith()`
* Replace part of a string using `replace()`

---

# 📋 Prerequisites

You should already understand:

* ✅ Variables
* ✅ Strings
* ✅ Functions
* ✅ Arrays
* ✅ Objects


---

# 🤔 Why Do We Need String Methods?

Imagine a customer enters their name like this:

```text
"   Godwin   "
```

Those extra spaces can cause problems.

Or suppose a user searches for:

```text
Laundry
```

You need to check whether a business name contains that word.

String methods help solve these kinds of problems.

---

# 🌍 Real-Life Analogy

Think of editing a document in Microsoft Word.

You can:

* Remove extra spaces
* Find a word
* Replace a word
* Check how a sentence begins

String methods let you do similar things in JavaScript.

---

# 📖 `trim()`

Removes spaces at the beginning and end.

```javascript
const name = "   Godwin   ";

console.log(name.trim());
```

Output:

```text
Godwin
```

Notice:

The original variable is **not** changed.

---

# 📖 `includes()`

Checks whether text contains another text.

```javascript
const business = "Klassy Klean Laundry";

console.log(business.includes("Laundry"));
```

Output:

```text
true
```

Another example:

```javascript
console.log(business.includes("Hotel"));
```

Output:

```text
false
```

---

# 📖 `startsWith()`

Checks the beginning of a string.

```javascript
const business = "Klassy Klean";

console.log(business.startsWith("Klassy"));
```

Output:

```text
true
```

---

# 📖 `endsWith()`

Checks the end of a string.

```javascript
const email = "godwin@gmail.com";

console.log(email.endsWith(".com"));
```

Output:

```text
true
```

---

# 📖 `replace()`

Replace one part of a string.

```javascript
const service = "Dry Cleaning";

console.log(service.replace("Dry", "Steam"));
```

Output:

```text
Steam Cleaning
```

Again, the original string does not change.

---


# 🐛 Common Mistakes

## Mistake 1

Thinking `trim()` changes the original variable.

Wrong expectation:

```javascript
const name = "  Godwin  ";

name.trim();

console.log(name);
```

Output:

```text
"  Godwin  "
```

Correct:

```javascript
const cleanName = name.trim();

console.log(cleanName);
```

---

## Mistake 2

Case sensitivity.

```javascript
const business = "Klassy Klean";

console.log(business.includes("klassy"));
```

Output:

```text
false
```

Because `"K"` and `"k"` are different.

---

# 💡 Best Practices

* Trim user input before saving it.
* Remember string methods return a new string.
* Pay attention to uppercase and lowercase letters.
* Use meaningful variable names.

---

# 🌍 Real-World Use

These methods are used for:

* Login forms
* Email validation
* Product search
* Search bars
* Form validation
* Customer management systems

You'll use them frequently in your Laundry Management System.

---

# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
const text = "   JavaScript Mastery   ";

console.log(text.trim());
console.log(text.includes("Master"));
console.log(text.startsWith("Java"));
console.log(text.trim().startsWith("Java"));
console.log(text.replace("Mastery", "Course"));
```

Think about each line before testing it.

---

# 📅 Tomorrow – Day 11

We'll learn **Numbers & Math**.

You'll work with:

* Arithmetic review
* `Math.round()`
* `Math.floor()`
* `Math.ceil()`
* `Math.random()`
* Practical calculations such as discounts, VAT, and receipt totals.

These concepts will be useful when building pricing features for your Laundry Management System.

---

## 🏆 Mentor's Message

We've now reached Day 10 which is a significant milestone.

We've built a solid foundation covering variables, control flow, functions, arrays, objects, and strings. From here onward, we'll keep building toward the **Console Laundry System App**, which will serve as the JavaScript phase's final project before moving into React.

Keep writing every line of code yourself. That's how you'll grow from someone who knows JavaScript syntax into someone who can solve real problems with it.

**LFG! 🚀💯**

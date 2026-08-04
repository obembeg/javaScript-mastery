# 🚀 Day 8 – Objects

# 🎯 Learning Objectives

By the end of today, you will be able to:

* Explain what an object is.
* Create objects.
* Access object properties.
* Update object properties.
* Add new properties.
* Use objects with functions.
* Understand the difference between arrays and objects.

---

# 📋 Prerequisites

Before starting today, you should understand:

* ✅ Variables
* ✅ Data Types
* ✅ Operators
* ✅ Conditionals
* ✅ Loops
* ✅ Functions
* ✅ Arrays

Today's lesson only builds on those concepts.

---

# 🤔 Why Do We Need Objects?

Imagine you're building **A Laundry Platform**.

A customer has:

* Name
* Phone Number
* Address
* Number of Laundry Items

Without objects:

```javascript
const customerName = "Godwin";
const customerPhone = "08105781658";
const customerAddress = "Sagamu";
const totalItems = 5;
```

These variables belong together, but JavaScript doesn't know that.

Instead:

```javascript
const customer = {
    name: "Godwin",
    phone: "08105781658",
    address: "Sagamu",
    totalItems: 5
};
```

Everything about one customer is now stored in one object.

---

# 🌍 Real-Life Analogy

Think of a **student ID card**.

One card contains:

* Name
* Student ID
* Department
* Level

Those are different pieces of information about **one student**. An object is like that ID card.

---

# 📖 Creating an Object

```javascript
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320
};
```

This object has **three properties**.

---

# 📖 Properties

Each piece of information is called a **property**.

Example:

```javascript
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320
};
```

| Property | Value         |
| -------- | ------------- |
| title    | Atomic Habits |
| author   | James Clear   |
| pages    | 320           |

---

# 📖 Accessing Properties

Use a **dot (`.`)**.

```javascript
console.log(book.title);
```

Output:

```text
Atomic Habits
```

Another example:

```javascript
console.log(book.author);
```

Output:

```text
James Clear
```

---

# 📖 Updating Properties

Objects can be changed.

```javascript
book.pages = 350;

console.log(book.pages);
```

Output:

```text
350
```

---

# 📖 Adding New Properties

Objects can grow.

```javascript
book.price = 12000;

console.log(book);
```

Now the object contains:

```javascript
{
    title: "Atomic Habits",
    author: "James Clear",
    pages: 350,
    price: 12000
}
```

---

# 📖 Objects with Functions

Functions can work with objects.

```javascript
function printCustomer(customer) {
    console.log(customer.name);
}

const customer = {
    name: "Godwin",
    phone: "08105781658"
};

printCustomer(customer);
```

Output:

```text
Godwin
```

---

# 📖 Arrays vs Objects

This is very important.

### Arrays

Used for **lists**.

```javascript
const colors = [
    "Red",
    "Blue",
    "Green"
];
```

---

### Objects

Used for **details about one thing**.

```javascript
const customer = {
    name: "Godwin",
    phone: "08105781658"
};
```

Easy way to remember:

* Array = many similar items
* Object = one item with many details

---

# 🐛 Common Mistakes

### Mistake 1

Typing:

```javascript
console.log(customerName);
```

instead of

```javascript
console.log(customer.name);
```

---

### Mistake 2

Misspelling a property.

```javascript
console.log(customer.phon);
```

Output:

```text
undefined
```

because the property doesn't exist.

---

# 💡 Best Practices

* Use meaningful property names.
* Keep related information in one object.
* Use dot notation for reading and updating properties.
* Choose objects when describing one thing.

---

# 🌍 Real-World Use

Objects are everywhere.

You'll use them in:

* User accounts
* Books
* Products
* Laundry orders
* API responses
* Database records
* React props
* Express request data

When you receive data from a database or an API, it will often come as objects.

---

# ⭐ Stretch Challenge

Without running the code, predict the output:

```javascript
const student = {
    name: "Ada",
    course: "Computer Science"
};

student.course = "Software Engineering";
student.level = 300;

console.log(student.course);
console.log(student.level);
console.log(student.name);
```

---

# 📅 Tomorrow – Day 9

Tomorrow we'll learn **Strings & Template Literals**.

You'll discover how to work with text more effectively and how to build readable messages without messy string concatenation.

---

## 🏆 Mentor's Message

Today is another major milestone.

You've learned:

* Variables store **one value**.
* Arrays store **many similar values**.
* Objects store **many details about one thing**.

These three ideas form the foundation of almost every JavaScript application you'll build.

---


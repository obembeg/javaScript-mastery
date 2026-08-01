const laundryItems = [
    "White Shirt",
    "Blue Shirt",
    "Jeans",
    "Jacket"
];

console.log("First Item:", laundryItems[0]);

console.log("Second Item:", laundryItems[1]);

console.log("Total Items:", laundryItems.length);

console.log("\nLaundry List");

for (let i = 0; i < laundryItems.length; i++) {
    console.log((i + 1) + ". " + laundryItems[i]);
}

`
What is \n?

\n is called the newline escape character. It tells JavaScript to start printing on a new line.

Example:
console.log("Hello\nWorld");

Output:
Hello
World

But...

const laundryItems = [
    "White Shirt",
    "Blue Shirt",
    "Jeans",
    "Jacket"
];

console.log("First Item:", laundryItems[0]);
console.log("Second Item:", laundryItems[1]);
console.log("Total Items:", laundryItems.length);

console.log("Laundry List");

for (let i = 0; i < laundryItems.length; i++) {
    console.log((i + 1) + ". " + laundryItems[i]);
}

Output:

First Item: White Shirt
Second Item: Blue Shirt
Total Items: 4
Laundry List
1. White Shirt
2. Blue Shirt
3. Jeans
4. Jacket

It's a little less pretty, but it only uses concepts we've already learned.
`
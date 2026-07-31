//1.
function sayHello() {
  console.log("Hello, JavaScript!");
}
sayHello();

//2.
function introduce(name) {
  console.log("My name is " + name + ".");
}
introduce("Godwin");

//3.
function square(number) {
  return number * number;
}
console.log(square(8));

//4.
function canVote(age) {
  if (age >= 18) {
    return "You can vote.";
  }
  return "You cannot vote yet";
}
console.log(canVote(17));
console.log(canVote(18));




//BONUS...... Study the code below, understand it and note the difference

function calculateLaundryCost(pricePerItem, quantity) {
  const totalCost = pricePerItem * quantity;
  const discount = totalCost * 0.1;
  const finalCost = totalCost - discount;
  if (totalCost >= 10000) {
    console.log("You get a 10% discount of ₦" + discount + " on your laundry.");
    return "Your laundry cost is ₦" + finalCost;
  } else {
    return "Your laundry cost is ₦" + totalCost;
  }
}

console.log(calculateLaundryCost(5000, 5));

function calculateLaundryCost(pricePerItem, quantity) {
  const totalCost = pricePerItem * quantity;

  console.log("Original Total: ₦" + totalCost);

  if (totalCost >= 10000) {
    const discount = totalCost * 0.1;
    const finalCost = totalCost - discount;

    console.log("Discount: ₦" + discount);
    console.log("Final Total: ₦" + finalCost);

    return finalCost;
  }

  console.log("Discount: ₦0");
  console.log("Final Total: ₦" + totalCost);

  return totalCost;
}

const finalAmount = calculateLaundryCost(5000, 5);

console.log("Amount to Pay: ₦" + finalAmount);
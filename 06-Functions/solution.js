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
  } else {
    return "You cannot vote yet";
  }
}
console.log(canVote(17));
console.log(canVote(18));
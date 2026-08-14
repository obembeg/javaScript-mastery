function greet() {
  console.log("Hello, Godwin!");
}

function executeCallback(callback) {
  console.log("Executing callback...");

  callback();
}

executeCallback(greet);

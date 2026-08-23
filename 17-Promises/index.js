const laundryPromise = new Promise((resolve, reject) => {
  const laundryCompleted = true;

  if (laundryCompleted) {
    resolve("Laundry is ready!");
  } else {
    reject("Laundry could not be completed.");
  }
});

laundryPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Laundry process finished.");
  });



//   # 🧠 Understand This Carefully

// Look at:
// if (laundryCompleted) {
//   resolve("Laundry is ready!");
// } else {
//   reject("Laundry could not be completed.");
// }

// If:
// laundryCompleted = true

// we call:
// resolve()

// which sends the value to:
// .then()

// If:
// laundryCompleted = false

// we call:
// reject()

// which sends the error to:
// .catch()

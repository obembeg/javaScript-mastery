function createLaundryOrder(customerName) {
    let orderCount = 0;

    return function () {
        orderCount++;

        console.log(
            customerName +
            " has placed " +
            orderCount +
            " order(s)."
        );
    };
}

const godwinOrders = createLaundryOrder("Godwin");

godwinOrders();
godwinOrders();
godwinOrders();

// Guess the output before running the code. Then run it to see if your prediction was correct.

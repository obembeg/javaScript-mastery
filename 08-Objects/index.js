const customer = {
    name: "Godwin",
    phone: "08105781658",
    city: "Sagamu",
    totalItems: 5
};

console.log("Customer:", customer.name);
console.log("Phone:", customer.phone);

customer.totalItems = 7;

console.log("Updated Items:", customer.totalItems);

customer.status = "Processing";

console.log("Order Status:", customer.status);

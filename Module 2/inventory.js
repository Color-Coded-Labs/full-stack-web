// Inventory array of objects
const inventory = [
  { id: 1, name: "Laptop", quantity: 4, price: 1000 },
  { id: 2, name: "Monitor", quantity: 10, price: 150 },
  { id: 3, name: "Mouse", quantity: 50, price: 20 },
  { id: 4, name: "Keyboard", quantity: 30, price: 40 },
  { id: 5, name: "Phone", quantity: 5, price: 600 },
];

function printItemNames() {
  console.log("delete this to complete this function");
}

// quantity < 10 = Low
function showLowQuantity() {
  console.log("delete this to complete this function");
}

function itemNamesToUppercase() {
  console.log("delete this to complete this function");
}

function totalInventoryValue() {
  // first solution
  let totalValue;

  for (item of items) {
    totalValue += item.quantity * item.price;
  }

  // second solution
  totalValue = inventory
    .map((item) => item.price * item.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  // third solution
  const getTotalItemValue = (accumulator, currentValue) => {
    return (accumulator += currentValue.price * currentValue.quantity);
  };

  INITIAL_VALUE = 0;

  totalValue = inventory.reduce(getTotalItemValue, INITIAL_VALUE);

  console.log("totalValue: " + totalValue);
}

// Testing functions
// printItemNames();
// showLowQuantity();
// itemNamesToUppercase();
totalInventoryValue();

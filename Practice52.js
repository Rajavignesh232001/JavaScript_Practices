// Find Element in Reference Array

const orders = [
  { id: 1, items: "SmatPhone", qunt: 1 },
  { id: 2, items: "Laptop", qunt: 5 },
];
let result = orders.findIndex(function (order) {
  return order.items === "Laptop";
});
console.log(result);
//Example

const vegetables = [
  { id: 1, item: "Potato", quantity: 2 },
  { id: 2, item: "Cabbage", quantity: 6 },
  { id: 3, item: "Carrot", quantity: 5 },
  { id: 4, item: "Mushroom", quantity: 4 },
];
let res = vegetables.find(function (veg) {
  return veg.id === 3;
});
console.log(res);

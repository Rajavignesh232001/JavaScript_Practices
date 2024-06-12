//Array

const cart = ["apple", "Mango", 20, 30, true, undefined, null];
const fruits = ["Apple", "Mango", "Grapes"];
fruits[2] = "Orange";
console.log(fruits);

//push
fruits.push("PineApple");
console.log(fruits);
//unshift
fruits.unshift("cherry");
console.log(fruits);
//splice
fruits.splice(3, 0, "Watermeon", "bananas");
console.log(fruits);

const number = [1, 2, 3, 4, 5, 9, 8, 7, 6];
console.log(number);

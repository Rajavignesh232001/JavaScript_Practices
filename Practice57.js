// Spread opr

let cart_arr = ["Maggi", "Beans", "Masala"];
let add_cart = ["Matchbox", "salt"];
// let final_cart = cart_arr.concat(add_cart);
// console.log(final_cart);

// spread

console.log((final_cart = [...cart_arr, 55, { name: "Raja" }, ...add_cart]));

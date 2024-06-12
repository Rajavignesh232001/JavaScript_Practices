// Combining and Extractiong an Array

let cart_arr = ["Maggi", "Beans", "Masala"];
let add_cart = ["Matchbox", "salt"];
let final_cart = cart_arr.concat(add_cart);
console.log(final_cart);
let extract=final_cart.slice(1,3);
console.log(extract);
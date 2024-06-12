// Removing an Element in an array

const num = [1, 2, 3, 4, 5];
num.pop(); //removes last element
num.shift(); //Removes first element
num.splice(1, 1); //Removes required element (1->index,1->number of element need to be removed)
console.log(num);

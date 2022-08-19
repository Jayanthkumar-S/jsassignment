// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array



function reverse() {
  var output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }

  return output;
}
let array = [1, 2, 3, 4, 5,-2];

console.log(reverse());
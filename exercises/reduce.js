/*
reduce (also known as fold) is a function that takes in an array, a combining function, and an initial value and builds up a result by calling the combining function on each element of the array, left to right.

This should call add on the initial value with the first element of the array, and then the result of that with the second element of the array, and so on until we reach the end, when we return the sum of the array.
Implement reduce.

function reduce(array, accumulator, initialValue)
Set sum to initial value
loop through the array
  set sum to accumulator(element, sum)

return sum

function accumulator(a, b):
  return a + b;


map: map([1, 2, 3], x => x + 1) -> [2, 3, 4]


*/

function map(array, accumulator) {
  for (let i = 0; i < array.length; i++) {
    let sum = accumulator(1, array[i]);
    array[i] = sum;
  }

  return array;
}

function filter(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0 ) {
      result.push(input[i]);
    } 
    
  }
  return result;
}

function reduce(array, accumulator, initialValue) {
  let sum = initialValue;

  for (let i = 0; i < array.length; i++) {
    sum = accumulator(sum, array[i]);

  }
  return sum;
}

function accumulator(a, b) {
  return a + b;
}





// test 
console.log(filter([0, 1, 2])) // [1]
console.log(filter([10, 10, 2])) // []
console.log(filter([0, -1, 2])) // [-1]

/*
console.log(map([1, 3, 5, 7], accumulator)) // [2, 4, 6, 8]
console.log(map([1, 5, 7], accumulator))  // [2, 6, 8]
console.log(map([7, -5], accumulator))    // [8. -4]

console.log(reduce([1, 3, 5, 7], accumulator, 8))  // 24
console.log(reduce([1, 5, 7], accumulator, 8))  // 21
console.log(reduce([7, -5], accumulator, 8))    // 10
console.log(reduce([], accumulator, 8)) // 8
*/
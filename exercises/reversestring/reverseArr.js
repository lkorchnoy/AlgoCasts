/*
1. Return the reverse of the array
mid = 
first = 0 # first index increment
last = len(arr)-1 # last index decrement
while first <= mid
  swap(first, last)
  first += 1
  last -= 1

1 2 3 4 5 6 7 8 9 
9               1
9 8           2 1
9 8 7       3 2 1
9 8 7 6    4 3 2 1
9 8 7 6 *5* 4 3 2 1
9 8 7 4 5 6 3 2 1


2. Sum two arrays, array1 forwards and array2 in reverse
[1, 2, 3], [1, 2, 3, 4] = [5, 5, 5, 1]
               1 + 4, 2 + 3, 3 + 2, 1 + undefined

results = []

iterate through first array
  add value to new results arr

for i = 0; i < arr2.length: 
  lastidx = arr2 length - 1 - i;
  if (results[i])
    results[i] += arr2[lastIdx]
  else: 
    results.push(arr2[lastIdx])

return results

arr2 = reverse(arr2)

i = 0;
results = []
while (i < arr1.length || i < arr2.length) {
  results.push((arr1[i] || 0) + (arr2[i] || 0))
}

return results;

results = []
choose left arr

i = 0

while i < arr1 length:
  add to results
    arr1[i] + (arr2[arr2.length - 1 - i] || 0)

while i < arr2.length:
  add to results arr2[arr2.length - 1 - i]

return results



  


3. Given an array of integers, return an array of elements that match their index.
[1, 2, -1] = []
[0, 5, 2] = [0, 2]
*/

function reverse(array) {
  // const mid = array.length / 2;
  let first = 0;
  let last = array.length - 1;

  while(first < last) {
    let temp = array[first];
    array[first] = array[last];
    array[last] = temp;
    first++
    last--
  }
 return array;
}

console.log(reverse([1, 2, 3, 4, 5])); //5, 4, 3, 2, 1
console.log(reverse([100, 99, 98]));


console.log(reverse([34, 45, 56, 67, 78]), '[78, 67, 56, 45, 34]')
console.log(reverse(['s', 'a', 'j', 'k', 'l', 'z']), '[z, l, k, j, a, s]')
console.log(reverse([]), '[]')
console.log(reverse([1]), '[1]')
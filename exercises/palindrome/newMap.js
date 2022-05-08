// The original solution, using a dictionary/map to keep track of the number of repetitions. Early return when you find an element that hits k occurences.


// The original solution, but do not return early. Build up the full dictionary of counts. Iterate through the array again and return the first one whose count is greater than or equal to k. 


// Discuss how this does not change the overall runtime or space complexity.


// For each element, iterate through the rest of the array to see if it is repeated k times. If it is, return it. Otherwise, go onto the next element.

//Walk through how this approach is O(n^2) runtime.






/*

dict[key] = value

k = 4
count = 3
[1,2,3,2,4,2,4,4]
       i 
              j



*/

function firstToK(array, k) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let count = map.get(array[i]) + 1 || 1;
    if(count === k) return array[i];
    map.set(array[i], count);
  }

  return -1
}


function firstToK2(array, k) {
  let map = new Map();

  array.forEach(item => {
    map.set(item, (map.get(item) || 0) +1)
  })

  for(let i=0; i< array.length; i++){
    if(map.get(array[i]) >= k){
      return array[i]
    }
 
  }
  return -1
}

function firstToK3(array, k) {
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = i; j < array.length; j++) {
      if(array[i] === array[j]) {
        count++;
      } 
    }
    if(count === k) {
      return array[i];
    };
    count = 0;
  }
  return -1;
}


let test = [1,2,3,2,4,2,4,4];

console.log(firstToK3(test, 3), 'expect 2')
console.log(firstToK3(test, 4), 'expect -1')




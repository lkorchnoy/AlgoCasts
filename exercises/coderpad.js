function count(head) {
  if (!head) {
    return 0;
  } else {
    return count(head.next) + 1;
  }
}

function append(head, target) {
  if (!head) {
    return new ListNode(target);
  }
  let node = head;
  while (node.next) {
    node = node.next;
  }

  node.next = new ListNode(target);
  return head;
}

function count(head) {
  let count = 0;
  let node = head

  while (node) {
    count += 1;
    node = node.next;
  }

  return count;
}

function findMax(node) {
  let result = node.value;

  while (node) {
    if (node.value > result) {
      result = node.value;
    }

    node = node.next;
  }

  return result;
}

function findMax(node) {
  if (!node.next) {
    return node.value;
  } else {
    const biggestValueInRest = findMax(node.next);

    return (node.value > biggestValueInRest ? node.value
      : biggestValueInRest);
  }
}

function append(head, target) {
  if (!head) {
    return new ListNode(target);
  }
  if (head.next) {
    append(head.next, target);
  } else {
    head.next = new ListNode(target);
  }
  return head;
}

function countTree(root) {
  if (!root) return 0;

  return (
    1 +
    countTree(root.left) +
    countTree(root.right)
  );
}

function countTree(root) {
  if (!root) return 0;

  return (
    1 +
    countTree(root.left) +
    countTree(root.right)
  );
}

function remove(node, value) {
  if (!node) return node;
  const sentinel = new ListNode(0, node)
  let curr = sentinel;
  
  while (curr && curr.next) {
    if (curr.next.value === value) curr.next = curr.next.next;
    else curr = curr.next;
  }
  
  return sentinel.next;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
      }
      array[j + 1] = key;
  }
  return array;
};

function sum(node) {
  if (!node) {
    return 0;
  } else {
    return node.value + sum(node.next);
  }
}




//Q. Given an unsorted array, perform insertion sort in ascending order.

//Examples:
//• Given an array: [1] // returns [1]
//• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

function insertionSort(array) {
  // Write your code here.
  return [-1]
}

// Test Cases
//console.log(insertionSort([])) // []
//console.log(insertionSort([1])) // [1]
//console.log(insertionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
//console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

function search(head, target) { 
  let curr = head
  while (curr) {
    if (curr.value === target) {
      return true
    }
    curr = curr.next
  }
  return false
}

function insert(head, target) {
  if (!head) return new ListNode(target)

  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let node = dummyHead

  while (node) {
    if (!node.next || target < node.next.value) {
      const next = node.next;
      node.next = new ListNode(target);
      node.next.next = next;
      break;
    }

    node = node.next;
  }

  return dummyHead.next;
}

// O(N) time
function kthFromLast(head, k) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    if (fast) {
      fast = fast.next;
    } else {
      return -1;
    }
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value;
}

// O(N) time
function kthFromLast(node, k) {
  let slow = node;
  let fast = node;

  for (let i = 0; i < k; i++) {
    
      fast = fast.next;
      
      if(fast==null) return null;
    
    }
    while(fast.next) {
      slow = slow.next;
      fast = fast.next
    }
  
  return slow;
}

// O(N^2) time
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const [cur, next] = [array[j], array[j + 1]];

      if (cur > next) {
        array[j] = next;
        array[j + 1] = cur;
      }
    }
  }
  return array;
}

console.log(bubbleSort([])) // []
console.log(bubbleSort([1])) // [1]
console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

// O(N) time
function findMiddle(head) {
  if (!head) {
    return null
  }
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;

}

function findTreeHeight(root) {   
  if (!root) {
    return -1
  }
  
  return 1 + Math.max(findTreeHeight(root.left), findTreeHeight(root.right))
}

// O(N) time
function numUniques(array) {
  const counts = new Map();

  array.forEach(el => {
    counts.set(el, (counts.get(el) || 0) + 1);
  });

  return Array.from(counts.values())
    .filter(count => count === 1)
    .length;
}

// O(N^2) time (shift() is O(N) with array)
function BFSTree(node, target) {
  let queue = node ? [node] : [];

  while (queue.length > 0) {
    let cur = queue.shift(); // dequeue first element
    if (cur.value === target) {
      return true;
    }
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return false;
}

// O(n) time
function fib(k) {
  if (k <= 1) return 1;

  let prev = 1;
  let cur = 1;

  for (let i = 2; i < k + 1; i++) {
    [prev, cur] = [cur, prev + cur];
  }

  return cur;
}

// O(N) time
function countTree(root) {
  const stack = root ? [root] : [];
  let result = 0;

  while (stack.length) {
    const node = stack.pop();
    result += 1;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result;
}

// O(N) time
function sumBT(root) {
  const stack = root ? [root] : [];
  let result = 0;

  while (stack.length) {
    const node = stack.pop();
    result += node.value;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result;
}


function searchBST(root, target) {
  let curr = root
  while (curr) {
    if (curr.value === target) {
      return true
    } else if (curr.value < target) {
      curr = curr.right
    } else {
      curr = curr.left
    }
  }
  return false
}

// O(logN) time
function insertBST(root, val) {
  let cur = root;

  if (!root) return new TreeNode(val);

  while (cur) {
    if (cur.value < val) {
      if (cur.right) {
        cur = cur.right;
      } else {
        cur.right = new TreeNode(val);
        return;
      }
    } else {
      if (cur.left) {
        cur = cur.left;
      } else {
        cur.left = new TreeNode(val);
        return;
      }
    }
  }
}

// O(N^2) time (shift() is O(N) with array)
function BFSTree(node, target) {
  let queue = node ? [node] : [];

  while (queue.length > 0) {
    let cur = queue.shift(); // dequeue first element
    if (cur.value === target) {
      return true;
    }
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return false;
}

//Q. Given a binary tree and a target element's value, determine if the tree ////contains the target using breadth first search (BFS).

//Examples:
//• Given a binary tree:
//                 3
//                / \
//              29   4
//             /     \
//             2       2
//                    /
//                   9
//• For target: 1 // returns False
//• For target: 2 // returns True

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
      this.value = value
      this.left = leftChild
      this.right = rightChild
  }
}

function BFSTree(root, target) { 
  // Write your code here.
  return false
}

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(BFSTree(null, 1)) // false
console.log(BFSTree(tree1, 9)) // true
console.log(BFSTree(tree1, 1)) // false
console.log(BFSTree(tree1, 2)) // true
console.log(BFSTree(new TreeNode(1), 2)) // false


/*
You are given a list of strings that have a similar pattern of character distances except for one. 
For example, the strings "ABC", "CDE" both have distance pattern is (1, 1).
The string "ADG" and "BEH" both have a distance pattern of (3, 3)
Given a list of strings, determine the one string that has a different distance.

["ABC", "CDE", "QWE"] => "QWE"
["WER", "ADG", "BEH"] => "WER"

//iterate over each string
  //find the distance pattern dp 
  //add dp to our frequencyMap i.e. increase the count
//check elements inside the frequencyMap for pattern that has frequency 1 pOdd
//iterate over each string again 
//return the string that matches pOdd


findOddOne(input)


const frequencyMap = {};
let dp = 0;
 frenchMap[a=0,b=1,c=2,

frequency[4:1]
frequency[4:2]

if frequency[4]
    if freuqnecy.get(4)>1
      return count,string.
    frequency[4]++
else{
frequency==count
}
is odd one out 
for (let char in frequencyMap) {
  if(frequencyMap[char] > dp) {
    dp = frequencyMap[dp];

    //after iteration
    if(dp.length > 1) 
    //Object.keys(string1).length !== Object.keys(string2).length 
    return
  }
}


  //method find dp: 
  count=0;
  //while(char[i]<char[i+]{
   count+=1
   char[i]= cha+1
   a,d 1
   b,d2
   c,d 3
   d,d 4 return 4

 }


for (let i = 0; i < input.length; i++) {
  // i= key distance pattern
  //inside i is the value.
  
  
  if(frequencyMap[i]) { 
    frequencyMap[i]++; 
  } else {
    frequencyMap[i] = 1;
  }
}

for (let char in frequencyMap) {
  if(frequencyMap['"key : value"] === 1 : 1)
  
}


  {
    (1, 1): 4,
    (2, 1):
  }

  for each string 
    getdistpattern(string)



getdistpattern(str) -> distance pattern
 "ABC"  => (1, 1)

{
  "a": 0,
  "b": 1,
  "c": 2,
  "d": 3
}


*/

function sumTwoLL(head1, head2) {
  let dummyHead = new ListNode(0) // Sentinel node in case lists are of zero length
  let curr = dummyHead, h1 = head1, h2 = head2
  while (h1) {
    curr.next = new ListNode(h1.value + h2.value)
    curr = curr.next
    h1 = h1.next
    h2 = h2.next
  }
  return dummyHead.next
}

function findTreeMax(root) {
  if (!root) {
    return null
  }
  let max = root.value
  let queue = [root]
  while (queue.length > 0) {
    let curr = queue.shift()
    max = Math.max(max, curr.value)
    if (curr.left) {
      queue.push(curr.left)
    }
    if (curr.right) {
      queue.push(curr.right)
    }
  }
  return max
}

// O(N) time
function DFSTree(node, target) {
  let stack = node ? [node] : [];

  while (stack.length > 0) {
    let cur = stack.pop(); // pop last element
    if (cur.value === target) {
      return true;
    }
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return false;
}

// O(N) time
function numUniques(array) {
  const counts = new Map();

  array.forEach(el => {
    counts.set(el, (counts.get(el) || 0) + 1);
  });

  return Array.from(counts.values())
    .filter(count => count === 1)
    .length;
}

// O(N) time
function sum(node) {
  if (!node) {
    return 0;
  } else {
    return node.value + sum(node.next);
  }
}

// O(N^2) time
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}

// O(N) time
function findMiddle(head) {
  if (!head) {
    return null
  }
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

// O(N time)
function append(head, target) {
  if (!head) {
    return new ListNode(target);
  }
  if (head.next) {
    append(head.next, target);
  } else {
    head.next = new ListNode(target);
  }
  return head;
}

//O(N) time
function countTree(root) {
  if (!root) return 0;

  return (
    1 +
    countTree(root.left) +
    countTree(root.right)
  );
}

// O(N^2) time (shift() is O(N) with array)
function BFSTree(node, target) {
  let queue = node ? [node] : [];

  while (queue.length > 0) {
    let cur = queue.shift(); // dequeue first element
    if (cur.value === target) {
      return true;
    }
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return false;
}

// O(N) time
function firstKTimes(array, k) {
  const counts = new Map();

  for (const el of array) {
    const count = (counts.get(el) || 0) + 1;
    if (count === k) return el;
    counts.set(el, count);
  }
  return -1
}

function search(head, target) { 
  if (!head) {
    return false
  }
  if (head.value == target) {
    return true
  }
  return search(head.next, target)
}

function search(head, target) { 
  let curr = head
  while (curr) {
    if (curr.value === target) {
      return true
    }
    curr = curr.next
  }
  return false
}

function searchBST(root, target) {
  let curr = root
  while (curr) {
    if (curr.value === target) {
      return true
    } else if (curr.value < target) {
      curr = curr.right
    } else {
      curr = curr.left
    }
  }
  return false
}

// O(logN) time
function binarySearch(array, target) {
  let first = 0;
  let last = array.length - 1;
  let targetIndex = -1;
  let middle;

  while (targetIndex === -1 && first <= last) {
      middle = Math.floor((first + last) / 2);
      if (array[middle] === target) {
          targetIndex = middle;
      } else if (array[middle] > target) {
          last = middle - 1;
      } else {
          first = middle + 1;
      }
  }
  return targetIndex;
}

// O(N) time
function reverse(head) {
  let prev;
  let cur = head;

  while (cur) {
    [cur.next, cur, prev] = [prev, cur.next, cur];
  }

  return prev;
}

// Lucy's 
// function reverse(head) {
//   // return new ListNode()
//   if(!head.next) return head;

//     let prev;
//     let curr = head;
    
//   while(curr) {
//     let temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   return prev;
// }

function reverse(head) {
  if (!head.next) return head;
 
  let prev;
  let curr = head;
 
  while (curr) {
    [curr.next, curr, prev] = [prev, curr.next, curr];
  }
  return prev;
 }
 
 // Test Cases
 //var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
 //console.log(arrayify(reverse(new ListNode(1)))) // [1]
 //console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
 //console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]

 function countOddValues(head) {
 if(!head) return null;
  
 let count = 0;
 
 let node = head;

 while(head) {
   if(head && head.next % 2 !== 0) {
     return 1;
     count += 1;
     node = node.next;
   } else {
     return 0;
   }
 }

 }

 console.log(countOddValues(null)) // 0;
 console.log(countOddValues(2)) // 0;
 console.log(countOddValues(1)) // 1;
 console.log(countOddValues(1,2)) // 1;

 function numKTimes(array) {
   let count = k;

   for (let i = 0; i < array.length; i++) {
     if(k > 1 && array[i] === k) 
     k += array[i];
   }
   return k;
 }

 // O(N) time
function validateBST(node) {
  function helper(node, min, max) {
    if (!node) {
      return true;
    } else if (node.value <= min || node.value > max) {
      return false;
    }

    return (
      helper(node.left, min, node.value) &&
      helper(node.right, node.value, max)
    );
  }

  return helper(node, min=-Infinity, max=Infinity)
}

// O(N^2) time
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}

function selectionSort(array) {
  // Write your code here.
  return [-1]
}

// Test Cases
console.log(selectionSort([])) // []
console.log(selectionSort([1])) // [1]
console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;

      for (let j = i+1; j < arr.length; j++) {
          if (arr[j] < arr[indexOfMin]) {
              indexOfMin = j
          }
      }

      if (indexOfMin !== i) {
          let lesser = arr[indexOfMin];  //swap(arr, indexOfMin, i)
          arr[indexOfMin] = arr[i];
          arr[i] = lesser;

      }
   }

   return arr;
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  const leftCopy = left.slice();
  const rightCopy = right.slice();
  return arr
    .concat(leftCopy)
    .concat(rightCopy);
}

// O(NlogN) time
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

//class TreeNode {
  //constructor(value = 0, leftChild = null, rightChild = null) {
      //this.value = value
      //this.left = leftChild
      //this.right = rightChild
  //}
//}


function sumEvenElementsInTree(root, target) {
  if(!root) {
  return false;
  }

let result = 0;

if(root % 2 === 0) {
  return true;
}

const l = sumEvenElementsInTree(root.left, target);
const r = sumEvenElementsInTree(root.right, target);

if(l % 2 === 0 || r % 2 === 0) {
  result += l, r;
  return l || r;
}
}

//console.log(countTree(null)) // 0
//console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
//console.log(countTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
//console.log(countTree(new TreeNode())) // 1


function firstDuplicate(array) {
  const seen = new Set();

  for (const value of array) {

    if(seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}

console.log(firstDuplicate([1, 2, 3, 2, 3, 4, 5]));


function firstDuplicate(array) {
  let min = array.length;

  for(let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        min = Math.min(min, j);
      }
    } 
  }
  if(min === array.length) return -1;

  return array[min];
}
console.log(firstDuplicate([1, 2, 1, 2, 3, 4, 5]));


function risingTideWinner(nominations) {
  const mostNominations = new Set();

  for(const value of nominations) {
    nominations.sort();
    if(mostNominations.has(value)) return value;
    mostNominations.add(value);
  }
  return -1;
}

console.log(risingTideWinner(["oliver", "pixel", "pinky", "pixel"]));
console.log(risingTideWinner(["oliver", "pixel", "pinky", "pixel", "pinky"]));


function everyXth(input, target) {
  const array = [];
  let index = 0;

  while(index < input.length) {
    array.push(input.slice(index, index + target));

    index += target;
  }

  return index;
}

console.log(everyXth([1, 2, 3, 4, 5, 6], 3));

function canPlaceFlowers(array, n) {
  for (let i = 0; i < array.length; i++) {
     if( i - 1 !== i + 1 && i === n) {
    return true;
  }
}
  return false;
}

console.log(canPlaceFlowers([1,0,0,0,1], 1));


function max_profit(prices) {
  let difference;
  for (let i = 0; i < prices.length; i++) {
    difference = Math.max(prices[prices.length - 1 - prices[i]]); {
    if(prices.sort((a, b) => a-b) && difference === Math.max) return i;
  }
}
  return null;
}

console.log(max_profit([[7,1,5,3,6,4]]));

function generateSequence(array, target) {
  let i;
  target = 0;
  while(array.length) {
    array[i] += target;
  }
  return array;
}

function numElementsRepeatedX(input, target) {
  const seen = new Set();
  for (const value of input) {
    if(seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}

// console.log(numElementsRepeatedX([1, 2, 3, 1, 2, 3], 2 ));
// console.log(numElementsRepeatedX([1, 2, 3, 1, 2, 3], 3));


//const array = [5, 4, 3, 2, 1];
//console.log(generateSequence(3));

//Given an input dictionary mapping Fellows (as string names) to skill //ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.
/*
//traverse dictionary 
/. count var
// if skill is found, incremement count by 1
// if not found count--
// count > 1 return true / return false 
*/


function canMatchFellows(array) {
  if(!array || array.length <= 0) return false; 

  let counts = new Map(); 


  array.forEach((name, skill) => {
    counts.set(name[1], (counts.get(name[1]) || 0) + 1); 
  }); 

  return Array.from(counts.values())
              .filter(count => count > 1)
              .length > 0; 

}


console.log(canMatchFellows([["Fellow 1", "javascript"], ["Fellow 2", "javascript"], ["Fellow 3", "javascript"]])); // true 
console.log(canMatchFellows([["Fellow 1", "c#"], ["Fellow 2", "java"], ["Fellow 3", "javascript"]])); 
//false 

console.log(canMatchFellows([])) //false 
function firstDuplicateValue(array) {
  // Write your code here.
  let min = array.length;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      
   if(array[i] === array[j]) {
    min = Math.min(min, j);
     
   }
  }
  }
    
    if(min === array.length) return -1;
    
  
  return array[min];
}

//One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the TODO list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.
//Oliver is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat.


// 2 ways to implement the queue
  // 1- static queue will be an array, but addind will o(n) 
  // 2- dynamic queue will be a linked list, o(1)


// We will go with an array 


// loop through the objects as key,value

//have a conditional that 

//key carter and value ['fido', 'ivy'] 

//iterate through the values and push it into queue 

//condition

//push value => ['fido', 'Ivy] if value === 'hat' return the key 


// function findToy(dogs) {
//   const queue = []
//   const nameOfDog = null;
//   for(let [key,value] of Object.entries(dogs)){
//     queue.push(key)
//     console.log(value)
//     console.log(queue)

//     if(value.includes('HAT')){
//       return queue.pop()
//     }
//   }
// }

// const dogs = {
//   'Carter': ['Fido', 'Ivy'],
//   'Ivy': ["HAT"], // Ivy has seen the hat
//   'Loki': ['Snoopy'],
//   'Pepper': ['Carter'],
//   'Snoopy': ['Pepper'],
//   'Fido': []
// };
// console.log(findToy(dogs, 'Loki'), 'Ivy');


function findToy(dogs, bestFriend) {
  const dogsToAsk = [bestFriend];
  const dogsAlreadyAsked = new Set();
  while(dogsToAsk.length > 0) {
    let nextDogToAsk = dogsToAsk.pop();
    if (dogsAlreadyAsked.has(nextDogToAsk)) {
      continue;
    }
    if (dogs[nextDogToAsk][0] === 'HAT') {
      return nextDogToAsk;
    }
    dogsAlreadyAsked.add(nextDogToAsk);

    const newDogsToAsk = dogs[nextDogToAsk];
    dogsToAsk.unshift(...newDogsToAsk);
  }
  throw new Error('Hat not found');
}

const dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
};
console.log(findToy(dogs, 'Loki'));

function removeDuplicatedFellows(array) {

  const counts = new Map();
 array.forEach(el => {
   counts.set(el, (counts.get(el) || 0) + 1);
 });

  return Array.from(counts.keys());

}

console.log(removeDuplicatedFellows(["oliver", "pixel", "oliver", "pinky", "pixel"]));

function sumArrays(array1, array2) {
  let sum;
  //for (let i = 0; i < array2.length; i++);
  // let sum;
  //let first = 0;
  //let last = array1.length - 1;
  
  //while(first < last){
  // let temp = array1[first];
  //  array1[first] = array1[last];
  //  array1[last] = temp;
  //  first++;
  //  last--;
  //  sum = array.push(array1 + array2)
  //}
  //return sum;
  return array1.every((array2, i) => {
    array2 + array1[array1.length - i - 1];
    return sum;
  })
}

console.log(sumArrays[1, 5, 10, 12], [2, 4, 3, 5]);



const diagonalSum = (matrix, direction) => {
let sum;
for (let i = 0; i < matrix.length; i++) {
  for(let j=0; j<matrix[i].length; j++){
    if (!matrix[i + 1] || matrix[i + 1][j + direction] === undefined) {
        continue;
    }
    sum = (matrix[i][j] + matrix[i + 1][j + direction]); 
  
    }
  }
  return sum;
}

function indicesOfTarget(input, target) {
  const results = [];
  for (let i = 0; i < input.length; i++) {
    if(input[i] === target){
      results.push(i);
    }
  }
  return results;
}
console.log(indicesOfTarget([1, 1, 1], 1));

function reverese(n, k) {
  
  for(let i = 0; i < n.length; i++) {
    let left = i;
    let right = min(i + k - 1, n - 1);
    if(n % k !== 0) {
      let temp = n[left];
      n[left] = n[right];
      n[right] = temp;
      i += k;
    }
  }
  return n;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function commaSeparate(input) {
  
  if(input.length < 2) {
    return input;
  } else {
    
    let last = "and" + input.pop();
    input.push(last);

  }
  return input;
 }

 //function addAdd(input) {
 
   //return input.replace(/ ([^,]*)$/, " and $1");

 //}


console.log(commaSeparate(["Sam", "Grant", "Jenny"]));
//console.log(addAdd(["Sam", "Grant", "Jenny"]));

// O(N) time
function findMax(node) {
  if (!node.next) {
    return node.value;
  } else {
    const biggestValueInRest = findMax(node.next);

    return (node.value > biggestValueInRest ? node.value
      : biggestValueInRest);
  }
}

function diff(array1) {
  array1.sort((a, b) => a - b);


  let idxOne = 0;
  let idxTwo = 0;

  let smallest = Infinity;
  let current = Infinity;
  let smallestSum = [];

  while(idxOne < array1.length) {
    let firstNum = array1[idxOne];
    let secondNum = array1[idxTwo + 1];
    if(firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if(secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return[firstNum, secondNum];
    }
    if(smallest > current) {
      smallest = current;
      smallestSum=[firstNum, secondNum];
    }
  }
  return smallestSum;
}

console.log(diff([4,2,1,3]));

// O(N) time
function sum(node) {
  if (!node) {
    return 0;
  } else {
    return node.value + sum(node.next);
  }
}

// O(N) time
function sum(node) {
  let result = 0;

  while (node) {
    result += node.value;
    node = node.next;
  }

  return result;
}

//Q. Given a linked list, sum all elements in the list.

//Examples:
//• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
//• Given a linked list: 1 // returns 1

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

//basecase: when it hits null - return 0
//recursive call - we're adding the current node value and calling sum(next node)
function sum(node) {
  // Write your code here.
  if(!node) return 0;
  return node.value + sum(node.next);
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1
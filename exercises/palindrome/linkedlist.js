/*
***1. Find the max element in an unsorted linked list (recursive) - 1m
***2. Sum two linked lists of equal length - 2m
****3. Insert an element into a sorted linked list (iterative) - 1m
*4. Insertion Sort - 3m
*5. Number of duplicated elements in an array - 1m
6. Binary Search - 3m
*7. Find the max element in a binary tree - 2m
*****8. Find an element in a binary tree using DFS - 2m 
***9. Insert an element into a binary search tree - 1m
*10. Validate BST - 6m
** 11. Given a linked list, turn the value of each node into its index, starting with 0
****12. Given an integer k, create a linked list representing the first k values of the Fibonacci sequence.
13. Given a target number, make sure all nodes in a Linked List to the left of said value are less than (don't remember the exact verbage)
**14. Remove every kth node in a linked list, where k >= 2

// Add MORE questions!
Order: 8, 3, 12, 1, 2, 9, 3
*/

class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


// 3. Insert an element into a sorted linked list (iterative)

// newVal = 6
//  G, 1, 3, 5, 6, 7, 9
//C                |
//P          |

function insertIntoSortedList(head, newVal) {
  if (!head) {
    return new LLNode(newVal);
  }

  const dummy = new LLNode("garbage", head);

  let curr = head;
  let prev = dummy;

  while (curr !== null) {
    //if (curr.value === newVal) {return dummy.next;}

    if(curr.value > newVal) {
      prev.next = new LLNode(newVal, curr);
      return dummy.next; // bug
    }
    // iterate forward
    prev = curr;
    curr = curr.next;
  }

  prev.next = new LLNode(newVal);
  // return 
  return dummy.next;
}

list = /* function call? */
list = insertIntoSortedList(list, 8)
list = insertIntoSortedList(list, 8)






// Find max element in a binary tree 
function findMaxInTree(root) { // number, -Infinity
  if (!root) {
  // Decide what happens in the base case
    return -Infinity;
  }

  // make recursive calls
  const l = findInTree(root.left);
  const r = findInTree(root.right);
  // How do we combine the results from the recursive calls
  return Math.max(l, r, root.value);
}




// Find an element in a binary tree using DFS
// Time Complexity - O(n)
//Space Complexity - ?
function findInTree(root, target) { // true/false
  if (!root) {
  // Decide what happens in the base case
    return false;
  }

  // what do we do at this node?
  if (root.value == target) {
    return true;
  }

  // make recursive calls
  const l = findInTree(root.left, target);
  const r = findInTree(root.right, target);
  // How do we combine the results from the recursive calls
  return l || r;
}


// Test Cases for findInTree
class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))

console.log(findInTree(LL1, 100)) // false;
console.log(findInTree(LL2, 100)) // false;


class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function removeAllValue(head, target) {
  if (!head) {
    return null;
  }

  const dummy = new LLNode("garbage", head);
  const curr = head;
  const prev = dummy;

  while (curr) {
    if (curr.value === target) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummy.next;

}


function removeEveryKth(head, k) {
  
  if (!head) {
    return null;
  }

  const dummy = new LLNode("garbage", head);
  const curr = head;
  const prev = dummy;
  let counter = k;
  
  while (curr) {
    if (counter == 0) {
      prev.next = curr.next;
      counter = k
    } else {
      prev = curr;
      counter -= 1;
      // counter--;
    }
    curr = curr.next;
  }

  return dummy.next;
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

function firstDuplicateValue(array) {
  // Write your code here.
	
	const seen = new Set();
	
	for (const value of array) {
		
		if(seen.has(value)) return value;
     seen.add(value);
	}
	
	return -1;
	
}

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
function numDuplicates(array) {
  const counts = new Map();

  array.forEach(el => {
    counts.set(el, (counts.get(el) || 0) + 1);
  });

  return Array.from(counts.values())
    .filter(count => count > 1)          //gives number of duplicastes
    .length;
}

function removeDuplicatedFellows(array) {

  const counts = new Map();
 array.forEach(el => {
   counts.set(el, (counts.get(el) || 0) + 1);
 });

  return Array.from(counts.keys());

}

console.log(removeDuplicatedFellows(["oliver", "pixel", "oliver", "pinky"]));


class Multiset extends Map {
  constructor(...args) {
      super(...args);
  }
  add(elem) {
      if (!this.has(elem))
          this.set(elem, 1);
      else
          this.set(elem, this.get(elem)+1);
  }
}

//.filter(x => x==2).length how many 2s are in the array.

.reduce((total,x) => (x==2 ? total+1 : total), 0)

var count = 0;
for(var i = 0; i < array.length; ++i){
    if(array[i] == 2)
        count++;
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

const HOME_TEAM_WON = 1;


function tournamentWinner(competitions, results) {

  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if(!(team in scores)) scores[team] = 0;

  scores[team] += points;
}

function searchIndex(numbers, target) {
  let index = numbers.findIndex(x => x >= target)
  if (index !== -1) {
    console.log(index);
  } else {
    console.log(numbers.length);
  }
}


//Merge Sort (Runtime: O(nlogn))
var sortArray = function(nums) {
  if (nums.length < 2) return nums
  let mid = Math.floor(nums.length/2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid)
  return merge(sortArray(left), sortArray(right))
};

var merge = (arr1, arr2) => {
  let arr = []
  while (arr1.length && arr2.length) {
      if (arr1[0] <= arr2[0]) arr.push(arr1.shift())
      else arr.push(arr2.shift())
  }
  return [...arr, ...arr1, ...arr2]
}

const sortArray = function(nums) {
  return nums.sort((a,b)=> a-b);
};

function canMatchFellows(inputs) {
  const charMap = {};

  for (const input of inputs) {
    const sortedInput = input.split('').sort().join('');

    if (sortedInput in charMap) {
      charMap[sortedInput].push(input);
    } else {
      charMap[sortedInput] = [input];
    }
  }
  return Object.values(charMap);
}

var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});

console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }

var myObject = { 'a': 1, 'b': 2, 'c': 3 };

for (var key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    myObject[key] *= 2;
  }
}

console.log(myObject);
// { 'a': 2, 'b': 4, 'c': 6 }

(input, rating) {
  const map1 = new Map();
  map1.set('input', 'rating');
  
  if(map1.has('input')) {
    return true;
  } else {
    return false;
  }


  function canMatchFellows(array) {
    if(!array || array.length <= 0) return false; 
  
    let counts = new Map(); 
  
  
    array.forEach((name, skill) => {
      counts.set(name[1], (counts.get(name[1]) || 0) + 1);   //If you have a dictionary, get() is a method where name is a variable holding the skill you're looking up and 0 is the default value. If name is not present in the dictionary, get returns 0.
    }); 
  
    return Array.from(counts.values())
                .filter(count => count > 1)
                .length > 0; 
  
  }
  
  
  console.log(canMatchFellows([["Fellow 1", "javascript"], ["Fellow 2", "javascript"], ["Fellow 3", "javascript"]])); // true 
  console.log(canMatchFellows([["Fellow 1", "c#"], ["Fellow 2", "java"], ["Fellow 3", "javascript"]])); 
  //false 
  
  console.log(canMatchFellows([])) //false 


  


  function findToy(dogs, bestFriend) {
    const dogsToAsk = [bestFriend];
    const dogsAlreadyAsked = new Set();
    while(dogsToAsk.length > 0) {
      nextDogToAsk = dogsToAsk.pop();
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


  function findToy(dogs) {
  const queue = []
  const nameOfDog = null;
  for(let [key,value] of Object.entries(dogs)){
    queue.push(key)
    console.log(value)
    console.log(queue)

    if(value.includes('HAT')){
      return queue.pop()
    }
  }
}

const dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
};
console.log(findToy(dogs, 'Loki'), 'Ivy');

funcation addAdd(input) {
  var delimeter = ', ';

  if(input.length > 2) {
    return input;

  } else {
    let k = input.split(delimeter);
    let last = "and" + k.pop();
    k.push(last);
    return k.join(delimeter);
  }
}

function diff(array1, array2) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;

  let smallest = Infinity;
  let current = Infinity;
  let smallestSum = [];

  while(idxOne < array1.length && idxTwo < array2.length) {
    let firstNum = array1[idxOne];
    let secondNum = array2[idxTwo];
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

var getHint = function(secret, guess) {
  let bulls = 0, cows = 0
  let map = new Map()
  for (let num of guess) (map.has(num)) ?  map.get(num).val++ : map.set(num, {val: 1})
  
  for (let i=0; i<guess.length; i++) {
      if (guess[i] == secret[i]) {
          bulls++
          map.get(guess[i]).val--;
          if (map.get(guess[i]).val == 0) map.delete(guess[i])
          secret = secret.substring(0, i) + 'x' + secret.substring(i + 1);
          guess = guess.substring(0, i) + 'y' + guess.substring(i + 1);
      }
  }
  for (let i=0; i<secret.length; i++) {
      if (map.has(secret[i])) {
          cows++
          map.get(secret[i]).val--
          if (map.get(secret[i]).val == 0) map.delete(secret[i])
      }
  }
  return `${bulls}A${cows}B`
};

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
function findToy(dogs) {
  const queue = []
  const nameOfDog = null;
  for(let [key,value] of Object.entries(dogs)){
    queue.push(key)
    console.log(value)
    console.log(queue)

    if(value.includes('HAT')){
      return queue.pop()
    }
  }
}
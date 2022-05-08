// function reduce(head, accumulator, initialVal) - returns single value
// function map(head, mapper) - returns new list
// function filter(head, test) - modifies list and returns new head
// function some(head, test) - returns true if at least one value passes the test function
// function every(head, test) - returns true if ALL of the values in the list pass the test function

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

/*

accFunction =

*/

const accFunction = (a, b) => {
  return a + b
}

// let test = [1,2,3,4];

// console.log(test.reduce(accFunction, 0));

/*
base case: 
if there is no head, we return our initialVal

recursive case:
we will call our accumulator function with the head.value and initialValue as params

 return reduce(head.next, accumulator, accumulator(head.value, initialVal))


*/

// function reduce(head, accumulator, initialVal) {
//   if (!head) {
//     return initialVal;
//   } else {
//     return reduce(head.next, accumulator, accumulator(head.value, initialVal);
//   }
// }

function reduce(head, accumulator, initialVal) {

  let curr = head;

  while (curr) {
    initialVal = accumulator(initialVal, curr.value)
    curr = curr.next
  }
  return initialVal;
}

// let test = new Node(1);
// test.next = new Node(2);
// test.next.next = new Node(3);
// test.next.next.next = new Node(4);

// console.log(reduce(test, (a, b) => a + b, 0));


/* function map(head, mapper) - returns new list

we need to have a separate list goign as we are iterating through our original list

map = a * a

1 -> 2 -> 3 -> 4
h

0 -> 
s

current Node = 1

sentinel.next = new Node(mapper(current.value))


curr

we need a current pointer to navigate our current

we need another ppointer that is a new node, so that we may build off the result linked list


*/


let test = new Node(1);
test.next = new Node(2);
test.next.next = new Node(3);
test.next.next.next = new Node(4);


function mapper(a) {
  return a * a
}

// let example = [1,2,3,4];
// let result = example.map((a) => a * a);
// console.log(result)


function map(head, mapper) {
  let curr = head;
  let result = new Node(0);
  let newList = result;

  while(curr !== null) {
    newList.next = new Node(mapper(curr.value));
    curr = curr.next;
    newList = newList.next;
  }

  return result.next;
}


// console.log(map(test, mapper));



// while (test) {
//   console.log(test.value);
//   test = test.next
// }


// let someNode = new Node(31, new Node(21), new Node(52))
// map(someNode, () => { })



// function filter(head, test) - modifies list and returns new head
/*

s -> 1 -> 2 -> 3 -> 4
c

return s.next

how to delete a node 101:
if we want to delete the 1 node from our list
we can only delete that from the node previous to 1
s.next = s.next.next

c.next = curr.next.next



delete elements that dont pass test

we want a sentinel that points to the head

what we actually are looking for is when curr.next.value does not pass test
curr.next = curr.next.next


*/

function filter(list, filterFunc) {
  let dummy = new Node(0, list);

  let curr = dummy;

  while (curr && curr.next != null) {
    if (!filterFunc(curr.next.value)) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
    
  }

  return dummy.next;
}

let res = filter(test, (a) => a > 2)

while (res) {
  console.log(res.value);
  res = res.next
}
// // Remove All Elements With a Target Value in a Linked List 
// // ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
// // ✏️ Description
// // ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// // Q. Given a linked list and a target integer, remove all nodes with the value target.

// // Examples:
// // • Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
// // • Given a linked list: 4, target: 4  // returns an empty list

// // ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
// // 🟨 Javascript
// // ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function remove(node, target) { 
    if(!node) return null;
    // console.log(node.next.value, "pink");

    const sentinel = new ListNode(0);
    sentinel.next = node;
    let curr = sentinel;
    
    while(curr?.next) {
      // console.log(curr, "curr");
      
      if(curr.next.value === target) {
        curr.next = curr.next.next
      } 
      // else {
        curr = curr.next;
      // }
    }
        
    return sentinel.next;
}

// [0, 4, 2, 1, 1, 3, 2, 2]
// //  ^  
//       //     ^
// // Test Cases
// var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
// var LL3 = new ListNode(4, new ListNode(2, new ListNode(4, new ListNode(4, new ListNode(3)))));
// var LL2 = remove(null, 1);
// console.log(arrayify(LL2)) // []
// LL1 = remove(LL1, 1);
// console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 
// LL1 = remove(LL1, 2);
// console.log(arrayify(LL1)) // [4, 3]
// LL1 = remove(LL1, 3);
// console.log(arrayify(LL1)) // [4]
// LL1 = remove(LL1, 4);
// console.log(arrayify(LL1)) // []
// LL3 = remove(LL3, 4);
// console.log(arrayify(LL3)) // [2, 3]

// // NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head! 
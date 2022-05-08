function reverse(head) {
    // return new ListNode()
    if(!head.next) return head;
  
      let prev;
      let curr = head;
      
    while(curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }
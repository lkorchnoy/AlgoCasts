// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {                //array inside the Queue class is holding data inside queue, create an array inside the class to map up to array methods unshift and pop
          this.data = [];          //when we want something to do with queue api 
                                   //to create a queue we will initilize an array and assign it to an instance of a queue we are creating 
    }
    add(record) {                  //we have to add new piece of data to the front of the structure(array)
       this.data.unshift(record);  //data could be named anything 
                                   //queue is an underlyinig array 
    }                              //array does all the magic 

    remove() {
        return this.data.pop();
    }
}

module.exports = Queue;

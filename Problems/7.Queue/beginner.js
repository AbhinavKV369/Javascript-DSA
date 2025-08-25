// Implement a queue using an array (enqueue, dequeue, front, isEmpty)
let queue = [];
// enqueue
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue);
// dequeue
queue.shift();
queue.shift();
console.log(queue);
// front
queue[0];
// isEmpty
queue.length === 0;
// Implement a queue using a class
class Queue {
  constructor(capacity) {
    this.items = [];
    this.capacity = capacity;
  }

  // Enqueue elements into a queue
  enqueue(element) {
    if (this.isFull()) {
      return "Cannot add, queue is full";
    }
    this.items.push(element);
  }

  // Dequeue elements from a queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Find the front element of a queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Find the rear element of a queue
  rear() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Count the number of elements in a queue
  count() {
    return this.items.length;
  }

  // Check if the queue is full
  isFull() {
    return this.items.length === this.capacity;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// ✅ Reverse a queue using stack
function reverseQueue(queue) {
  let stack = [];

  // Move all elements from queue to stack
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  // Push back elements from stack to queue (reverses order)
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }
}

// Example usage
let q = new Queue(5);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log("Original queue:", q.items);

reverseQueue(q);

console.log("Reversed queue:", q.items);

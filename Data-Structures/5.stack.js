// A Stack is a linear data structure that follows the LIFO principle

// Common operations:
// push — add an element to the top
// pop — remove the top element
// peek/top — view the top element without removing it
// isEmpty — check if the stack is empty

const stack = [];

stack.push(10);
stack.push(30);
stack.push(40);

console.log(stack);

const popped = stack.pop();
console.log(popped);
console.log(stack);

const top = stack[stack.length-1];
console.log(top);

console.log(stack.length);

// Stack using DSA style
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // View top element without removing
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size of stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Usage
const stacks = new Stack();

stacks.push(5);
stacks.push(10);
console.log(stacks.peek());  // 10

console.log(stacks.pop());   // 10
console.log(stacks.size());  // 1

console.log(stacks.isEmpty()); // false

stacks.clear();
console.log(stacks.isEmpty()); // true

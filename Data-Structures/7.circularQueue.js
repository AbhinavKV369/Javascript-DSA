// Circular queue implementation
// enqueue() - add an element to a queue
// dequeue() - remove oldest element from the queue
// isfull() - check if the queue is full
// isEmpty() - checks the queue is full
// peek() - get value of element of the front of the queue
// size() - get the number of element in the queue
// print() - visulize element in the queue
// Circular queue implementation
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Circular queue is full");
      return;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;

    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Circular queue is empty");
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null; // optional clear
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Circular queue is empty");
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let result = "";
    let count = this.currentLength;

    for (let i = 0; i < count; i++) {
      let index = (this.front + i) % this.capacity;
      result += this.items[index] + " ";
    }
    console.log(result.trim());
  }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

cq.print(); // 10 20 30 40

cq.dequeue(); // removes 10
cq.enqueue(50);
cq.dequeue()
cq.dequeue()
cq.enqueue(60);

cq.print(); // 20 30 40 50 60


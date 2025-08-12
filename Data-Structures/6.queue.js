// Queue implementation
// enqueue(element) - add an element to the queue
// dequeue - remove the oldest element from the queue
// peek() - get the value of first element in the queue
// isEmpty() - check the queue is empty
// size() - get the number of element in the queue
// print() - print th element in the queue

// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(element){
//         this.items.push(element);
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("The queue is empty");
//             return null
//         }else{
//            return this.items.shift();
//         }
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("The queue is empty");
//             return null
//         }else{
//            return this.items[0]
//         }      
//     }
//     size(){
//         return this.items.length;
//     }
//       isEmpty() {
//         return this.items.length === 0;
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }

// const q = new Queue();
// q.enqueue(5);
// q.enqueue(10);
// q.print();              // "5,10"
// console.log(q.peek());  // 5
// console.log(q.dequeue()); // 5
// console.log(q.size());    // 1
// q.print();              // "10"

// Optimized queue

class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0; // Pointer to the front
        this.rearIndex = 0;  // Pointer to the rear
    }

    enqueue(element) {
        this.items[this.rearIndex] = element;
        this.rearIndex++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("The queue is empty");
            return null;
        }
        const value = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("The queue is empty");
            return null;
        }
        return this.items[this.frontIndex];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.rearIndex - this.frontIndex;
    }

    print() {
        console.log(this.items);
    }
}

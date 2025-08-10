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


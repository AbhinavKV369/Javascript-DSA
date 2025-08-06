/* 
Key-Value Pairs:
An object is an unordered collection of key-value pairs, where each key uniquely identifies its corresponding value. The key must be a string or symbol data type, while the value can be of any data type.
Value Retrieval:
Values within an object can be retrieved using their corresponding keys. This is typically done through dot notation (e.g., object.key) or bracket notation (e.g., object['key']).
Non-Iterable:
Unlike some other data structures, an object is not an iterable. This means it cannot be directly used with constructs like a for...of loop.
*/

const object = {
    name : "Raju Bhai",
    age: 10,
    "key-value": true,
    sayMyName: function(){
        console.log(this.name)
    }
}

object.sayMyName()

object.job = "Devoloper";
delete object.job

console.log(object);
console.log(object.name,object.age);
console.log(object["key-value"]);

// other methods Object.keys(),values & entries.

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

// Object - Big-O time complexity
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O (n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)
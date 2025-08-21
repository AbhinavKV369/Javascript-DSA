// Create a Set with some numbers
const numberset = new Set([1,2,3,4,5,6,7,8,3]);
console.log(numberset);

// Add elements to a Set
let number = new Set();
number.add(1);
number.add(2);
number.add(3);
number.add(4);
console.log(number);

// Delete an element from a Set
number.delete(2);
console.log(number);

// Check if a value exists in a Set
console.log(number.has(3),number.has(5));

// Find the size of a Set
console.log(number.size);

// Loop through a Set (using for...of)
 let index = 0;
for(let num of number){
    console.log(index,":",num);
    index++;
}

// Convert a Set to an array
function setToArray(set){
    let array = []
    for(let num of set){
        array.push(num)
    }
    return array;

    // return [...set]
}
let set = new Set([1,2,3,4,5,6])
console.log(setToArray(set));

// Clear all elements in a Set
number.clear();
console.log(number);

// Check if two Sets are equal (same elements)
function areSetsEqual(set1,set2){
    if(set1.size !== set2.size){
        return false;
    }
    for(let keyValue of set1){
        if(set2.has(set1)){
            return false;
        }
    }
    return true;
}
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([4, 3, 2, 1]);
console.log(areSetsEqual(set1,set2));
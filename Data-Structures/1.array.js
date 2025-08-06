// Array is a data structure that hold a collection of values
// Arrays can contain a mix of diffrent data types can store strings,boolean,number,object etc. in the same array.

const array = [1,2,3,4,5];
array.pop() // remove last element in the array
array.shift() // remove first element from array
array.push(6) // add element to last of array
array.unshift(0) // add element to first of the array
console.log(array[0]); 
console.log(array);

for(const item of array){ // work like for loop
    console.log(item); // print the each element in the array
}

// Other array methods are map, reduce, filter,concat,slice & splice.
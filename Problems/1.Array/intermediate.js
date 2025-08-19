// Remove duplicates from an array
function removeDuplicatesSet() {
  let array = [1, 2, 3, 4, 5, 6, 6, 7];
  array = [...new Set(array)];
  return array;
}
console.log(removeDuplicatesSet());

// Remove duplicates from an array (without using Set)
function removeDuplicates() {
  let array = [1, 2, 3, 4, 5, 6, 6, 7];
  let uniqueArray = [];
  for (let num of array) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }
  return uniqueArray;
}
console.log(removeDuplicates());

// Rotate right an array by k positions (left or right)
function rotateRight(k) {
  let array = [1, 2, 3, 4, 5, 6];
  k = k % array.length;
  for (let i = 0; i < k; i++) {
    let last = array.pop();
    array.unshift(last);
  }
  return array;
}
console.log(rotateRight(3));

// Rotate right an array by k positions (left or right)
function rotateLeft(k) {
  let array = [1, 2, 3, 4, 5, 6];
  k = k % array.length;
  for (let i = 0; i < k; i++) {
    let first = array.shift();
    array.push(first);
  }
  return array;
}
console.log(rotateLeft(2));

// Find all pairs in an array whose sum is equal to a given number
function findSumPairs(number) {
  let array = [1, 2, 3, 4, 5, 6, 7, 8];
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
}
console.log(findSumPairs(10));

// Check if an array is sorted (ascending or descending)
function isArraySorted() {
  let array = [1, 2, 3, 4, 5, 6, 7];
  let ascending = true;
  let descending = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) ascending = false;
    if (array[i] < array[i + 1]) descending = false;
  }
  return ascending || descending;
}
console.log("Is array sorted: " + isArraySorted());

// Merge two sorted arrays into one sorted array
function mergeTwoSortedArray() {
  let array1 = [1, 2, 3, 4, 4, 5];
  let array2 = [2, 4, 6, 7, 10];
  let merged = [];
  let i = 0, j = 0;

  while(i<array1.length && j<array2.length){
    if(array1[i]>array2[j]){
      merged.push(array2[j]);
      j++;
      
    }else{
      merged.push(array1[i]);
      i++;
    }
  }
  while(i<array1.length){
    merged.push(array1[i]);
    i++;
  }
  while(j<array2.length){
    merged.push(array2[j]);
    j++;
  }
  return merged;
}

console.log("Combined sorted array is "+mergeTwoSortedArray());

//Find the difference between the largest and smallest element
function diffrenceLargeSmall(){
  const array = [1,2,3,4,5,6,7,8];
  let largest = array[0];
  let smallest = array[0];

  for(let i = 0;i<array.length;i++){
    if(array[i] > largest){
    largest = array[i]
    }
  }
   for(let j = 0;j<array.length;j++){
    if(array[j] < smallest){
     smallest = array[j]
    }
  }

  return `Diffrence between ${largest} and ${smallest} is ${largest - smallest} `;
}
console.log(diffrenceLargeSmall());

// Count positive, negative, and zero numbers in an array
function countNegativeZeroPositive(){
    const array = [-1,-2,-4,0,0,0,1,2,3,4,5,6,7,8];
    let negative = 0;
    let positive = 0;
    let zero = 0;
    for(let i = 0;i<array.length ; i++){
      if(array[i]<0){
        negative ++;
      }else if(array[i]>0){
        positive++;
      }else{
        zero++;
      }
    }
    return `There are ${negative} negative numbers,${positive} positive numbers and ${zero} zeros in array ${array}`
}
console.log(countNegativeZeroPositive());

// Find all unique elements in an array
function uniqueNumbers(){
  const array = [1,2,3,3,5,6,6,7,7,6];
  let uniqueArray = []
  for(let i = 0;i<array.length;i++){
    if(!uniqueArray.includes(array[i])){
      uniqueArray.push(array[i])
    }
  }
  return "The unique element in the array is" + uniqueArray;
}
console.log(uniqueNumbers());

// Replace all negative numbers with 0
function replaceNegativeWithZero(){
  let array = [-2,-1,0,1,2,3,-4,5,-6,7];
  for(let i =0 ;i<array.length;i++){
    if(array[i] < 0){
      array[i] = 0;
    }
  }
  return array;
}
console.log(replaceNegativeWithZero());


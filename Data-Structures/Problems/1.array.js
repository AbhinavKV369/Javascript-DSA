// array

// 1. reverse a array
function reverseArray() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
console.log(reverseArray());

// 2. largest number in the array
function findLargestNumber() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let largestNumber = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] >= largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}
console.log(findLargestNumber());

// 3.second largest number
function findSecondLargestNumber() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
   if(array[i]>largest){
    secondLargest = largest;
    largest = array[i];
   }
  }
  return secondLargest;
}
console.log(findSecondLargestNumber()); 

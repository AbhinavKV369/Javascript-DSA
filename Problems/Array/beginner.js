
// Find the largest number in an array
function findLargestNumber() {
  const array = [1, 2, 3, 4, 5];
  let largest = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return "Larget element is " + largest;
}
console.log(findLargestNumber());

// Find the smallest number in an array
function findSmallestNumber() {
  const array = [1, 2, 3, 4, 5];
  let smallest = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return "Smallest element is " + smallest;
}
console.log(findSmallestNumber());

// Calculate the sum of all elements
function findArraySum() {
  const array = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return "Sum of elements in array is " + sum;
}
console.log(findArraySum());

// Count even and odd numbers in an array
function countEvenOdd() {
  const array = [1, 2, 3, 4, 5];
  let even = 0;
  let odd = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 === 0) {
      even ++;
    } else {
      odd ++;
    }
  }
  console.log(`Even count:${even},Odd count:${odd}`);
}
countEvenOdd();

// Reverse an array (without using reverse() function)
function reverseArray() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return "Reversed Array is " + reversedArray;
}
console.log(reverseArray());

// Check if an element exists in an array
function isElementExists(element) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}
console.log("Is given element exist in the array: ", isElementExists(1));

// Count how many times a number appears in an array
function numberAppearence(number) {
  const array = [1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8];
  let count = 0;
  for (num of array) {
    if (num === number) {
      count = count + 1;
    }
  }
  return `The number ${number} appeared ${count} times in the array ${array}`;
}
console.log(numberAppearence(0));

//Find the index of a given element (or -1 if not found)
function indexOfElement(number) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let index = -1;
  for (let i = 0; i <= array.length - 1; i++) {
    if(number === array[i]){
       index = i;
    }
  }
  return `The number ${number} in the index ${index} of array ${array}`
}
console.log(indexOfElement(3));

// Swap first and last elements of an array
function swapFirstLastOfArray(){
  let array = [1,2,3,4,5,6,7,8];
  let firstIndex = 0;
  let lastIndex = array.length-1;
  [array[firstIndex],array[lastIndex]] = [array[lastIndex],array[firstIndex]];
  return array
}
console.log(swapFirstLastOfArray());

// Find the second largest element
// way-1
// function findSecondLargestNumber(){
//   const array = [1,2,3,4,7,6,8];
//   let sortedArray = array.sort((a,b)=>a-b);
//   return "Second largest number in array is "+sortedArray[array.length - 2];
// }
// console.log(findSecondLargestNumber());
// way-2
function findSecondLargestNumber(){
    const array = [1,2,3,4,5];
    let largestNumber = -Infinity;
    let secondLargestNumber = -Infinity;
    for(let i = 0;i<array.length;i++){
        if(array[i]>largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = array[i];
        }else if(num>secondLargestNumber && num <largestNumber){
             secondLargestNumber = num;
        }
    }
    return secondLargestNumber;
}
console.log(findSecondLargestNumber());


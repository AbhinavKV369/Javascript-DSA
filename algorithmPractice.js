// 1. Reverse a array
function reverseArray(){
   let array = [1,2,3,4,5,6,7,8,9];
    let reversedArray =[]
    for(i = array.length-1;i>0;i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
console.log(reverseArray());

// 2. Reverse an string
const reverseString = () =>{
    const str = "Abhinav KV";
    let reversedString = ""
    for(let i = str.length-1;i>=0;i--){
        reversedString += str[i]
    }
    return reversedString
}
console.log(reverseString());

// 3. Largest number in a array
function largestNumber(){
   let array = [1,2,3,4,5,6,7,8,9];
    largestNumber = array[0];
    for(let i = 1;i<=array.length;i++){
        if(array[i]>=largestNumber){
             largestNumber = array[i]
        }
    }
    return largestNumber
}
console.log(largestNumber());

// 4. Sum of elements in array
function sumOfArray(){
   let array = [1,2,3,4,5];
    let sum = 0;
    for(let i = 0;i<=array.length-1;i++){
        sum += array[i]
    } 
    return sum;
}
console.log(sumOfArray());

// 5. Wowels in a string
function countWowel(){
   let name = "count wowels"
   let vowels = "aeiouAEIOU"
   let count = 0
   for(let letter of name){
    if (vowels.includes(letter)) {
      count++;
    }
   }
   return count;
}
console.log(countWowel());

// 6. Remove duplicates from array
function removeDuplicates(){
    let array = [1,2,3,4,4,5,7,5,6,8];
    let duplicate = array[0];
    newArray = []
   for(let i = 0;i<=array.length-1;i++){
    if(array[i] !== duplicate){
        newArray.push(array[i])
        duplicate = array[i]
    }
   }
   return newArray ;
}
console.log(removeDuplicates());

// 7. Is array is sorted
function isArraySorted(arr){
    for(let i = 0;i<=arr.length-1;i++){
        if(arr[i] > arr[i+1]) return false
    }
    return true
}
console.log(isArraySorted([1,2,3,43,4,45]));
console.log(isArraySorted([1,2,3,4,4,5]));

// 8.  Find the Missing Number in an Array of 1 to N
function findMissingNumber(){
}
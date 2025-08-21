// Remove duplicates from an array using a Set
function removeDuplicate(array){
    let newArray = new Set(array);
    return [...newArray] ;
}
console.log(removeDuplicate([1,2,3,4,4,5,6]));

// Example set
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

// Find the intersection of two Sets (common elements)
function findIntersection(set1,set2){
    commonElements = []
    for(let element of set1){
        if(set2.has(element)){
            commonElements.push(element);
        }
    }   
    return commonElements; 
}
console.log(findIntersection(set1,set2));

// Find the union of two Sets (all unique elements)
function findUnion(set1,set2){
    let array = [...set1,...set2];
    return array;
}
console.log(findUnion(set1,set2));

// Find the difference of two Sets (elements in A but not in B)
function differenceOfsets(set1,set2){
    let difference = new Set([...set2].filter(x => set1.has(x)));
    console.log("Difference (A - B):", difference);
}
differenceOfsets(set1,set2);

// Check if a string has all unique characters
function checkUniqueCharacters(string){
    let unique = new Set();
    for(let char of string){
        if(unique.has(char)){
            return false
        }else{
            unique.add(char);
        }
    }
    return true + " " + JSON.stringify([...unique]);
}
console.log(checkUniqueCharacters("abcd"));

// Count unique characters in a string using Set
function countUniqueCharacters(str) {
  let unique = new Set(str);  
  return unique.size;  
}
console.log("Count of unique elements is",countUniqueCharacters("abcd"));   // 4

// Check if one Set is a subset of another
function isSubset(setA, setB) {
  for (let elem of setA) {
    if (!setB.has(elem)) {
      return false;   
    }
  }
  return true;
}
console.log(isSubset(set1, set2)); 
console.log(isSubset(set2, set1));

// Find duplicate elements in an array using Set
function duplicateElements(array){
    let duplicate = new Set();
    let unique = new Set();
    for(let num of array){
        if(!unique.has(num)){
            unique.add(num);
        }else{
            duplicate.add(num);
        }
    }
    return duplicate;
}
console.log(duplicateElements([1,3,2,3,4,2]));

// Check if two arrays contain the same unique elements
function haveSameUniqueElements(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    if(set1.size !== set2.size){
        return false;
    }
     for (let value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  return true;
}
console.log(haveSameUniqueElements([1, 2, 2, 3], [3, 1, 2]));
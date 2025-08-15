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
  for (num of array) {
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
console.log(rotateRight(3))

// Rotate right an array by k positions (left or right)
function rotateLeft(k) {
  let array = [1, 2, 3, 4, 5, 6];
  k = k % array.length;
  for(let i = 0;i<k;i++){
    let first = array.shift();
    array.push(first);
  }
  return array;
}
console.log(rotateLeft(2));
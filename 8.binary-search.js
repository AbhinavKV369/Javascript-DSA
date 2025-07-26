function binarySearch(arr, target) {
  if (arr.length === 0) return -1;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    
    if (target === arr[middleIndex]) {
      return middleIndex;
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));           // ➝ 2
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // ➝ 2
console.log(binarySearch([2, 4, 6, 8, 10], 5));           // ➝ -1

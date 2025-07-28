function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursively sort left and right, and join with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [1, 0, 3, 4, 2, 4, 7];
console.log(quickSort(arr));  // ➝ [0, 1, 2, 3, 4, 4, 7]
// 
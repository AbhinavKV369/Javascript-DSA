function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}
const arr = [1, 4, 2, 5, 8, 7, 9, 0];
insertionSort(arr);
console.log(arr);
//Nested loop practice

// fibonacci-series
const fibonacciSeries = (n) => {
  const fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log(fibonacciSeries(10));

// factorial of number
const factorialOfNumber = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorialOfNumber(5));

// prime number
const primeNumber = (n) => {
  if (n < 2) {
    return -1;
  }
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//power of two
const powerOfTwo = (n) => {
  if (n < 1) {
    return -1;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return -1;
    }
    n = n / 2;
  }
  return true;
};
console.log(powerOfTwo(12));

////////////////////////////////////////////////////////

// recursion
// recursive fibonacci series
const recursionFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
};
console.log(recursionFibonacci(2));

// recursive factorial of number;
const recursiveFactorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};
console.log(recursiveFactorial(5));


////////////////////////////////////////////////////////////////////////

// search algorithms

// linear search
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
};
const arr = [1, 3, 2, 3, 4, 7, 9, 8, 9];
const target = 9;
console.log(linearSearch(arr, target));

// binary search
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex;
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 2, 5, 6, 5, 6], 1));

// binary recursive search

function factorial(n) {
  var result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

//Big-O - o(n)
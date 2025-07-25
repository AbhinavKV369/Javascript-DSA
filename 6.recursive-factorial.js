function recursiveFactorial(n){
    if(n < 1) return 1 ;
    return n * recursiveFactorial(n-1)

}

console.log(recursiveFactorial(1)); // Output: 120
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3)); // Output: 1
console.log(recursiveFactorial(4)); // Output: 24
console.log(recursiveFactorial(5)); // Output: 120
console.log(recursiveFactorial(6)); // Output: 720
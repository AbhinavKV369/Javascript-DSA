function findLargestNumber(arr){
    let largestNumber = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]>largestNumber){
          largestNumber = arr[i];
        }
    }
    return largestNumber;
}

console.log(findLargestNumber([2,20,10,3,4,6,12,3,18,30,7,2]))
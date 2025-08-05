// function sumOfArray(array){
//    return array.reduce((sum,arr)=> sum + arr,0)
// }

// console.log(sumOfArray([1,2,3,4,5]))

// function  sumOfArray(array){
//     let sum = 0;
//     for(let i = 0 ; i<array.length;i++){
//         sum += array[i]
//     }
//     return sum
// }

// console.log(sumOfArray([1,2,3,4,5]));

function sumOfArray(array){
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum ;
}

console.log(sumOfArray([1,2,3,4,5]))

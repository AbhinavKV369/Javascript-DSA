// function countWowels(str){
//     let count = 0;
//     const wowels = "aeiouAEIOU"
//     for(i = 0;i<str.length;i++){
//         if(wowels.includes(str[i])){
//             count ++
//         }
//     }
//     return count
// }

// console.log(countWowels("Abhinav KV"));
// console.log(countWowels("aeiou"));

function countWowels(str){
    let count = 0
    const wowels = "AEIOUaeiou";
    for(let char of str){
        if(wowels.includes(char)){
            count ++
        }
    }
    return count ;
}

console.log(countWowels("Abhinav KV"));
console.log(countWowels("aeiou"));

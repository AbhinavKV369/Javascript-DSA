function isAnagram(str1,str2){
    function format(str){
       return str.split("").sort().join("");
    }
    return format(str1) === format(str2)
}

console.log(isAnagram("Abhi","Abhi"));

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

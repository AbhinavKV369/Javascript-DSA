// Count the number of characters in a string
function countString(str) {
  return `The string ${str} has ${str.length} characters`;
}
console.log(countString("hello world"));

// Count vowels and consonants in a string
function countWowelsConsonent(str) {
  let string = str.trim().toLowerCase();
  const vowels = "aeiouAEIOU";
  let consonantsCount = 0;
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  }
  return `Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`;
}
console.log(countWowelsConsonent("Hello world"));

// Reverse a string (without using .reverse())
function reverseString(string){
    let reversedString = "";
    for(let i = string.length-1;i>=0;i--){
        reversedString += string[i];
    }
    return `The reverderd form of ${string} is ${reversedString}`;
}
console.log(reverseString("Hello world"))

// Check if a string is a palindrome
function checkPalindrome(string){
    let reversed = string.split("").reverse().join("");
    return string === reversed;
}
console.log(checkPalindrome("121"));

// Convert a string to uppercase / lowercase
function stringUpperLowerCase(string){
    let lower = string.toLowerCase();
    let upper = string.toLowerCase();
    return{
        string:string,
        lower:lower,
        upper:upper,
    }
}
console.log(stringUpperLowerCase("Hello World"));

// Count how many times a given character appears
function characterRepeat(string,char){
  let count = 0;
  for(let i = 0; i<string.length;i++){
    if(string[i] === char){
      count += 1;
    }
  }
  return `The character ${char} appeared ${count} times`;
}
console.log(characterRepeat("repeated characters","e"));

// Find the first non-repeating character in a string
function nonRepeatingChar(string){
  let charCount = {};
  for(let i = 0;i<string.length;i++){
    charCount[string[i]] = (charCount[string[i]] || 0)+1;
  }
  for(j = 0;j<string.length;j++){
    if(charCount[string[j]] === 1 ){
      return "The first non repeated character is " + string[j]
    }
  }
   return null;
}
console.log(nonRepeatingChar("Non repeated characters"));

// Check if two strings are equal (without using == or ===)
function areStringsEqual(string1,string2){
  if(string1 !== string2){
    return false;
  }
  for(let i = 0;i<string1.length;i++){
    if(string1[i]>string2[i] && string1[i]<string2[i]){
      return false;
    }
  }
  return true;
}
console.log("Is the strings are equal: "+ areStringsEqual("abc","abc"));

// Remove all spaces from a string
function removeSpace(string){
  let str = "";
  for(let i = 0;i<string.length;i++){
    if(string[i] !== " "){
      str += string[i];
    }
  }
  return str;
}
console.log(removeSpace("Hello world"));

// Replace all occurrences of a character with another
function replaceOldWithNew(string,oldChar,newChar){
  let result = "";
  for(i = 0;i<string.length;i++){
    if(string[i] === oldChar){
      result += newChar;
    }else{
      result += string[i]
    }
  }
  return `The word ${oldChar} of the ${string} is replaced with ${newChar} and the result is ${result}`;
}
console.log(replaceOldWithNew("school","o","u"))
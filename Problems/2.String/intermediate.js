// Check if two strings are anagrams (same letters, different order);
function checkAnagram(str1, str2) {
  let format = (string) => {
    return string.split("").sort().join("");
  };
  return format(str1) === format(str2);
}
console.log(
  "Is both strings are anagrams:" + checkAnagram("anagram", "aanragm")
);

// Find the longest word in a sentence
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(
  "The longest word in string is " +
    findLongestWord("I love programming very much")
);

// Capitalize the first letter of each word
function capitalizeFirstLetter(sentence) {
  let word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
console.log(capitalizeFirstLetter("Capitalize the first letter of each word"));

// Find all substrings of a string
function findSubString(string) {
  let subString = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      subString.push(string.slice(i, j));
    }
  }
  return subString;
}
console.log(findSubString("abc"));

// Count the number of words in a sentence
// function countWords(sentence){
//     const words = sentence.trim().split(/\s+/);
//     return words.length;
// }
// console.log(countWords("Count the number of words in a sentence"));
function countWords(sentence) {
  let count = 0;
  let inWord = false;
  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i];
    if (char !== " " && !inWord) {
      inWord = true;
      count++;
    } else if (char === " ") {
      inWord = false;
    }
  }
  return "Number of words in sentence is " + count;
}
console.log(countWords("Count the number of words in a sentence"));

// Remove duplicate characters from a string
function duplicateCharacters(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!result.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}
console.log(duplicateCharacters("Duplicate Characters"));

// Check if a string contains only digits
function isStringHasDigits(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return string.length > 0;
}
console.log("Is character contain number: " + isStringHasDigits("12s"));

// Find the most frequent character in a string
function frequentCharCount(string) {
  let charCount = {};

  // count characters
  for (let char of string) {
    if (/[a-zA-Z]/.test(char)) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  let largest = 0;
  let mostFrequentChar;
  for (let index in charCount) {
    if (charCount[index] > largest) {
      largest = charCount[index];
      mostFrequentChar = index;
    }
  }
  return `${mostFrequentChar} appears ${largest} times`;
}
console.log(frequentCharCount("Find the most frequent character in a string"));

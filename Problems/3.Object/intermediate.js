const { json } = require("stream/consumers");

// Count the frequency of each character in a string using an object
function countCharFrequency(string) {
  let charCount = {};
  for (let char of string) {
    if (char === " ") continue;
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return "The character count :" + JSON.stringify(charCount);
}
console.log(countCharFrequency("Character Frequency"));

// Count the frequency of words in a sentence
function frequencyOfWords(sentence) {
  let words = sentence.split(" ");
  let wordsCount = {};
  for (let num of words) {
    wordsCount[num] = (wordsCount[num] || 0) + 1;
  }
  return "The words count:" + JSON.stringify(wordsCount);
}
console.log(
  frequencyOfWords(
    "Count the frequency of words in a sentence. Count the words!"
  )
);

// Merge two objects into one
function mergeTwoObjects() {
  let obj1 = {
    name: "John Doe",
    age: 23,
  };
  let obj2 = {
    job: "Develepor",
    salary: 40000,
  };
  // const mergedObject = {...obj1,...obj2};
  const mergedObject = Object.assign({}, obj1, obj2);
  return mergedObject;
}
console.log(mergeTwoObjects());

// Find the property with the maximum value in an object
//(e.g., highest marks among students);
function highestMark() {
  let marks = { Alice: 50, Bob: 80, Charlie: 70 };
  let highestScore = -Infinity;
  let highestScorer = "";
  for (let key in marks) {
    if (marks[key] > highestScore) {
      highestScore = marks[key];
      highestScorer = key;
    }
  }
  return highestScorer + " is the highest scorer";
}
console.log(highestMark());

// Swap keys and values in an object
function swapKeyValue() {
  let obj = { name: "John", age: 25, grade: "A" };
  let swapped = {};
  for (let key in obj) {
    swapped[obj[key]] = key;
  }
  return swapped;
}
console.log(swapKeyValue());

// Convert an object to an array (of keys/values/entries)
function objectToArray() {
  let obj = {
    name: "Alice",
    age: 22,
    grade: "A",
  };
  let keyArray = Object.keys(obj);
  console.log("key array is " , keyArray);
  let valueArray = Object.values(obj);
    console.log("value array is " , valueArray);
    let entriesArray = Object.entries(obj);
    console.log("entries array is ", entriesArray);
}
objectToArray();

// Convert an array of objects into a single object
function arrayOfObjectToSingle() {
  let objects = [
    { name: "Alice" },
    { age: 22 },
    { grade: "A" }
  ];

  let singleObj = Object.assign({},...objects);
  
  console.log(singleObj);
}
arrayOfObjectToSingle();

// Convert an array of objects into a single object
function arrayOfObjectToSingleReduce() {
    let objects = [
    { name: "Alice" },
    { age: 22 },
    { grade: "A" }
  ];
  let singleObj = objects.reduce((acc,curr)=>{
    let object = {...acc,...curr} ;
    console.log(object);
  },{});
  return singleObj;
}
arrayOfObjectToSingleReduce()

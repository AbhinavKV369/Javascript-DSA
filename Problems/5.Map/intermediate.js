// Count the frequency of elements in an array using Map
function countFrequency(arr) {
  let freqMap = new Map();

  for (let item of arr) {
    if (freqMap.has(item)) {
      freqMap.set(item, freqMap.get(item) + 1);
    } else {
      freqMap.set(item, 1);
    }
  }
  return freqMap;
}
let numbers = [1, 2, 2, 3, 4, 3, 2, 5, 1, 1];
let frequency = countFrequency(numbers);
console.log(frequency);

// Count the frequency of words in a sentence
function frequencyOfWords(sentence) {
  let words = sentence.split(" ");
  let freqMap = new Map();

  for (let word of words) {
    if (freqMap.has(word)) {
      freqMap.set(word, freqMap.get(word) + 1);
    } else {
      freqMap.set(word, 1);
    }
  }
  return freqMap;
}
console.log(
  frequencyOfWords("I love coding and I love JavaScript and coding is fun")
);

// Find the first non-repeating character in a string using Map
function findFirstNonRepeatingChar(string) {
  let freqMap = new Map();
  for (let char of string) {
    if (freqMap.has(char)) {
      freqMap.set(char, freqMap.get(char) + 1);
    } else {
      freqMap.set(char, 1);
    }
  }
  for (let char of string) {
    if (freqMap.get(char) === 1) {
      return char;
    }
  }
  return null;
}
console.log(findFirstNonRepeatingChar("Javascript fundamentals"));

// Group objects by a property using Map
function groupObjectByProperty(students, property) {
  let grouped = new Map();
  for (let stud of students) {
    let key = stud[property];
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(stud);
  }
  return grouped;
}
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" },
];
console.log(groupObjectByProperty(students, "grade"));

// Find duplicate elements in an array using Map
function findDuplicate(array) {
  let duplicates = [];
  let freqMap = new Map();
  for (let item of array) {
    if (freqMap.has(item)) {
      freqMap.set(item, freqMap.get(item) + 1);
    } else {
      freqMap.set(item, 1);
    }
  }
  for (let [key, value] of freqMap) {
    if (value > 1) {
      duplicates.push(key);
    }
  }
  return duplicates;
}
console.log(findDuplicate([1, 2, 3, 2, 4, 5, 1, 6, 1]));

// Swap keys and values of a Map
// Swap keys and values of a Map (handle duplicate values)
function swapKeyValues(map) {
  let swapped = new Map();

  for (let [key, value] of map) {
    if (swapped.has(value)) {
      swapped.get(value).push(key);
    } else {
      swapped.set(value, [key]);
    }
  }
  return swapped;
}

// Example Map
let student = new Map([
  ["A", "Alice"],
  ["B", "Bob"],
  ["C", "Charlie"],
  ["D", "Alice"], // duplicate value
]);
console.log(swapKeyValues(student));

// Merge two Maps
function mergeTwoMaps() {
  let map1 = new Map([
    ["a", 1],
    ["b", 2],
  ]);

  let map2 = new Map([
    ["c", 3],
    ["d", 4],
  ]);

  // Method 1
  // let merged = new Map([...map1,...map2]);
  // Method 2
  for (let [key, value] of map2) {
    map1.set(key, value);
  }
  return map1;
}
console.log(mergeTwoMaps());

// Convert an object to a Map
function changeObjectToMap() {
  let object = {
    name: "John",
    age: 29,
    grade: "A",
  };

  // method 1
  // for(let obj in object){
  //     map.set(obj,object[obj])
  // }

  // method 2
  let map = new Map(Object.entries(object));
  return map;
}
console.log(changeObjectToMap());

// Convert a Map to an object
function changeMapToObject() {
  let object = {};
  let map = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["isStudent", true],
  ]);
  for (let [key, value] of map) {
    object[key] = value;
  }
  return object;
}
console.log(changeMapToObject());

// Check if two Maps are equal
function changeMapsAreEqual() {
  let map1 = new Map([
    ["a", 1],
    ["b", 2],
  ]);

  let map2 = new Map([
    ["c", 3],
    ["d", 4],
  ]);
  if (map1.size !== map2.size) return false;
   for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}
console.log(changeMapsAreEqual());

// Create a Map with some key–value pairs
const myMap = new Map([
    ["name","Alice"],
    ["age",25],
    ["isStudent", true]
]);
console.log(myMap);
console.log("name",myMap.get("name"));
console.log("Age",myMap.get("age"));

// Add a new key–value pair to a Map
myMap.set("country","India");
myMap.set("state","Kerala");
console.log(myMap);
myMap.set("age", 30); 
myMap.set("country", "USA");
console.log(myMap);

// Delete a key from a Map
myMap.delete("state");
console.log(myMap);

// Check if a key exists in a Map
console.log(myMap.has("name"));  
console.log(myMap.has("age"));  
console.log(myMap.has("gender"));  

// Find the size of a Map
console.log(myMap.size);

// Loop through a Map (keys, values, entries)
for (let key of myMap.keys()) {
  console.log("Key:", key);
}
for (let key of myMap.keys()) {
  console.log("Key:", key);
}
for (let [key, value] of myMap.entries()) {
  console.log(key, ":", value);
}

// Clear all entries in a Map
myMap.clear();
console.log("After clear:", myMap);
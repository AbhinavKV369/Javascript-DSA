// Create a Map
const map = new Map();

// Set key-value pairs
map.set('name', 'Abhinav');
map.set(1, 'One');
map.set(true, 'Boolean key');

// Get value by key
console.log(map.get('name'));   // Abhinav
console.log(map.get(1));        // One

// Check if key exists
console.log(map.has(true));     // true

// Get size of map
console.log(map.size);          // 3

// Delete a key
map.delete(1);

// Iterate over map
for (const [key, value] of map) {
  console.log(key, value);
}
// Output:
// name Abhinav
// true Boolean key

// Clear all entries
map.clear();
console.log(map.size);          // 0

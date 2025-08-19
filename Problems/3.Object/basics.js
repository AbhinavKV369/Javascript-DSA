// Create an object to store details of a student (name, age, grade)
const student = {
    name:"John Doe",
    age:23,
    grade:"A grade"
}

// Access object properties (dot notation & bracket notation)
// dot notation 
console.log(student.name);
console.log(student.age);
// bracket notation
console.log(student["grade"]);

// Update a property in an object
student.age = 24;
student["grade"] = "S grade";
console.log(student);

// Delete a property from an object
delete student.grade;
console.log(student);

// Check if a property exists in an object
console.log("name" in student);
console.log("age" in student);

// Loop through an object using for...in
for(let content in student ){
    console.log(content,student[content]);
}

// Get all keys of an object (using Object.keys)
console.log(Object.keys(student));

// Get all values of an object (using Object.values)
console.log(Object.values(student));

// Get both keys and values (Object.entries)
console.log(Object.entries(student));

// Find the number of properties in an object
console.log(Object.keys(student).length);

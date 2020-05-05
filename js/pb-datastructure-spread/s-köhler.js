// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of 
// euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 
console.log("_________________1_________________________");
let euroCountries = [10, 32, 42, 452];
let asianCountries = [1025, 5486, 12365, 500];

euroCountries = [...euroCountries,...asianCountries];
 console.log(euroCountries);

let allCounteries = [];
    allCounteries = [euroCountries + asianCountries];
console.log(allCounteries+" nicht teil der aufgabe");




// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
console.log("_________________2_________________________");

// Shallow Clone Array
let nammen = ["alex", "Bob", "Clara"];
let nammeKopie = [...nammen];
nammen.push("Doris");
console.log(nammen);
console.log(nammeKopie);

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
console.log("_________________3_________________________");

// console.log(person)
//Math.max
let zahlenArray = [15, 32, 33, 45, -55, 150, 24];
let groessteZahl = Math.max(...zahlenArray);
console.log(groessteZahl);

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log("_________________4_________________________");

let zahlenArray1 = [15, 32, 33, 45, -55, 150, 24];
let kleinsteZahl = Math.min(...zahlenArray1);
console.log(kleinsteZahl);

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.
console.log("_________________5_________________________");

const person = {name: "John"}
const job = {role: "Teacher"}
let employee = {...person, ...job};
employee.name = "micha";

console.log("employee: ", employee);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the 
// average of all the 
// arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false
console.log("_________________6_________________________");


// console.log( isWhole(1, 2, 3, 4));
// console.log( isWhole(9, 2, 2, 5));

// * Once you have created a function, pass in an array as an argument which contains four elements - check 
// if this method still outputs the correct result!
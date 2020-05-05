// 1. Object Person. Create an object named person. Loop through the object and 
// print both the property and value of the object.
// 1. Objekt Person. Erstellen Sie ein Objekt mit dem Namen person. Schleife durch das Objekt und
// drucke sowohl die Eigenschaft als auch den Wert des Objekts.

console.log("_____________________1_________________________________");
let user = {
    name: "max mustermann",
    email: "max.mustermann@gmail.com",
    birthday: "22.05.68"
}

for (let key in user) {
    let value = user[key];
    console.log((key) + " : " + (value));

}
// 2. Get Values. Create a function that returns an array of all values of an 
// object's properties.
// 2. Werte abrufen. Erstellen Sie eine Funktion, die ein Array aller Werte von a zurückgibt
// Objekteigenschaften.
console.log("_____________________2_________________________________");

let getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}
let temp = [];
for (let key in getObjectValues) {
    temp.push(getObjectValues[key]);

}
console.log(temp);
// Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"] 

// 3. Add A Method. Create an object and add a method to that object which prints 
// the values of the objects in a string.
// Erwartete Ausgabe:
// ["Tee", "Kaffee", "Milch"]

// 3. Eine Methode hinzufügen. Erstellen Sie ein Objekt und fügen Sie dem zu druckenden Objekt eine Methode hinzu
// die Werte der Objekte in einer Zeichenfolge.
console.log("_____________________3_________________________________");
let person = {
       firstName: "Michael",
       lastName: "Smith", 
       job: "driver",
       age: 20, 
       city: "Paris"
     }
   
        console.log(person["firstName"]+" "+ person["lastName"]+" is "+person["age"]+" year old "+person["job"] +" in "+ person["city"]);
        console.log(`${person.firstName} ${person.lastName} is ${person.age} year old ${person.job} in ${person.city}`);
     
     
// Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
// Bonus Questions
// Beispiel für die erwartete Leistung "Michael Smith ist ein 20 Jahre alter Fahrer in Paris".
// Bonusfragen



// 1. Convert keys and values into an array. Create a function that converts an object
//  into an array of keys and values.

// 1. Konvertiere Schlüssel und Werte in ein Array. Erstellen Sie eine Funktion, die ein Objekt konvertiert
// in ein Array von Schlüsseln und Werten
console.log("_____________________bonus1_________________________________");


// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// Expected output:
//[["A", 1], ["B", 2], ["C", 3]]

const object1 = {
      A: 1,
       B: 2,
       C: 3
     }
     const objectToArray1 = (object) => {
         return Object.entries(object);
     }
     console.log(objectToArray1(object1));
    
//      }
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// let objectToArray ={
//     cats: 1,
//     dogs: 2, 
//     turtles: 4
// }
const object = {
    cats: 1,
    dogs: 2, 
    turtles: 4
   }
   const objectToArray = (object) => {
       return Object.entries(object);
   }
   console.log(objectToArray(object));

// 2. List Properties. Create a function that returns an array of properties of a 
// javascript object.
// 2. Eigenschaften auflisten. Erstellen Sie eine Funktion, die ein Array von Eigenschaften von a zurückgibt
// Javascript Objekt.

console.log("_____________________bonus2_________________________________");
let student = {
    name: "Mike", 
    class: "4A" ,
    course: "English"
}
const getPop = (object )=>{
let temp3 = [];
for (let key in student) {
    temp.push(key);
}
return temp3
}
console.log(student);
// Example
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]



// 3. Merge. Create a function that takes two objects as its parameters and merges
//  them together into a new object.
// 3. Zusammenführen. Erstellen Sie eine Funktion, die zwei Objekte als Parameter verwendet und zusammenführt
// sie zusammen zu einem neuen Objekt.

console.log("_____________________bonus3_________________________________");

// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: What happens if you merge two objects with the same property values? 
// In merging these two objects, do you expect to change either or both of the 
// original objects? Why or why not? Comment your answers.

// Extra Credit: Was passiert, wenn Sie zwei Objekte mit denselben Eigenschaftswerten zusammenführen?
// Erwarten Sie beim Zusammenführen dieser beiden Objekte, dass Sie eines oder beide der Objekte ändern
// Originalobjekte? Warum oder warum nicht? Kommentieren Sie Ihre Antworten.



// 4. Switch Keys and Values. Create a function to get a copy of an object. The
//  copy must switch the keys and values.

// 4. Schlüssel und Werte wechseln. Erstellen Sie eine Funktion, um eine Kopie eines Objekts zu erhalten. Das
// copy muss die Schlüssel und Werte wechseln.

console.log("_____________________bonus4_________________________________");

// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job} 


// 5. Return Keys and Values. Write a program that takes an object and returns 
// an array which contains two arrays: one for the keys of the object and the 
// other for the values of the object.

// 5. Schlüssel und Werte zurückgeben. Schreiben Sie ein Programm, das ein Objekt nimmt und zurückgibt
// ein Array, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das
// andere für die Werte des Objekts.

console.log("_____________________bonus5_________________________________");

// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
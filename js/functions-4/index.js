// Finish these Functions

console.log("---1---")
// Schreiben Sie eine Funktion, die feststellt, wie viele Elemente sich in einem Array befinden
const fruits = ["Banana", "Apple", "Orange"];

const fruitCounter = (someArray) => {
    return someArray.length; 
}

console.log(fruitCounter(fruits)); //Should return 3 
fruits.push("Kiwi");
console.log(fruitCounter(fruits)); //Should return 4

console.log("---2---");
// Schreiben Sie eine Funktion, die das zweite Element eines array.arr zurückgibt
const instruments = ["Guitar", "Piano", "Drums", "Trumpet"];
const secondElement = (someArray) => {
    return someArray[1]; 
}

console.log(secondElement(instruments)); // Should return Piano


console.log("---3---");                                                                   
// Schreibe eine Funktion, die einen String und nimmt
// gibt an einem Wochentag "Oh nein" und an einem Wochenende "Oh ja" zurück.
const dayChecker = (dayOfTheWeek) => {
    if((dayOfTheWeek === "sunday")||dayOfTheWeek==="samstag") { 
        return "Oh Yes!";
    } else {
        return "Oh No!";
    }
}
console.log(dayChecker("samstag")); // Should return "Oh Yes!"
console.log(dayChecker("sunday")); // Should return "Oh Yes!"
console.log(dayChecker("monday")); // Should return "Oh No!"

console.log("---4---");
// Schreiben Sie eine Funktion, die ein Array durchläuft und alle Indizes von Zahlen größer als 10 zurückgibt
const numbers = [0, 10, 11, 200, -39, 23];
const greaterThanTen = (numArray) => {
    let allIndexes = "";
    for(let i = 0; i<=numArray.length-1; i++){
        if(numArray[i] > 10) {
            allIndexes = allIndexes + " " + i ; 
        }
    }
    return allIndexes; 
}
console.log(greaterThanTen(numbers)); // Should return 2, 3, 5

console.log("---5---");
// Write a function that adds all numbers between 0 and 100
const adder = () => {
    let result = 0;
    for (let i = 0; i <= 100; i++){
        result += i; 
    }
    return result; 
}
const additionResult = adder();
console.log(additionResult); // Should return 5050

console.log("---6---");
// Schreibe eine Funktion, die alle geraden Zahlen zwischen 0 und 100 addiert;
const evenAdder = () => {
    let result = 0;
    for(let i = 0; i<= 100; i++){ 
        if(i%2===0){ 
            result += i;
        }
    }
    return result;
}

console.log(evenAdder()); // Should return 2550

console.log("---7---");
// Schreibe eine Funktion, die prüft, ob ein Array das Element "hello" enthält.
// Hinweis: Verwenden Sie Google.
const array1 = ["hello", "world"];
const array2 = ["hi", "word"];
const containsHello = (wordArray) => {
    if ( wordArray.includes("hello")) { 
        return true;
    } else {
        return false;
    }
}

console.log(containsHello(array1)); // Should return true
console.log(containsHello(array2)); // Should return false

/* Extra:
1. Write a function that returns all numbers divisible by 3 between -1000 and 1000.
2. Write a function that deletes all whitespace from a given string
3. Write a function which reverses an array. Bonus: Do not use array.reverse() */

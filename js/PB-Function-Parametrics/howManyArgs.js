// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

// Erstellen Sie eine Funktion howManyArgs, die die Gesamtanzahl der übergebenen Argumente 
// zurückgibt.
//  Beispiel: Die Übergabe von 3 Argumenten beim Aufruf der Funktion sollte die Zahl 
// 3 zurückgeben, die Übergabe von 15 Argumenten sollte die Umber 15 zurückgeben

const howManyArgs = (...args) => {
console.log(args.length)
}

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1

// Bonus: Create a function average which accepts any amount of numbers and returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

// Bonus: Erstellt einen Funktionsdurchschnitt, der eine beliebige Anzahl von Zahlen akzeptiert
// und deren Durchschnittswert zurückgibt.
// Der durchschnittliche Durchschnitt einer Menge von Zahlen wird berechnet, 
// indem alle Zahlen addiert und das Ergebnis der Addition durch die Anzahl der Zahlen in der 
// Menge dividiert werden
// Beispiel: Um den Durchschnitt von 12, 14 und 16 zu berechnen -
// 12 + 14 + 16 = 42
// 42/3 = 14
const average = (...args) => {
let sum = 0;
for (let i=0; i<args.length; i++){
     sum += args[i]  
}
return sum / args.length
}


console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14

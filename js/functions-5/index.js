// Finish these Functions

console.log("---1---");
// Eine Funktion schreiben, die alle "z" -Elemente in einem Array durch "0" ersetzt.
const replacer = (array) => {
    for (let i = 0; i < 1; i++){ // Edit this line
        if(array[i] === "z"){
           array[i] = 0;
        }
    }
    return array;
}
console.log(replacer(["z","e", "r", "o"])); // should return [0, "e", "r", "o"]

console.log("---2---");
// Schreiben Sie eine Funktion, die eine Zahl n-mal mit sich selbst multipliziert.
// mit anderen Worten, gebe die Zahl hoch n zurück. Aber benutze eine for-Schleife. 
const multiplier = (number, n) => {
    result = number;
    for(let i = 1; i < n; i++){
        result = result * number; 
    return result; 
}
}

console.log(multiplier(2, 3)); // Should return 8
console.log(multiplier(3, 1)); // Should return 3

 console.log("---3---");


 // Schreibe eine Funktion, die zwei Argumente aufnimmt und prüft, ob sie gleich sind.

 const isSame = (arg1, arg2) => {
     return (arg1===arg2);
 }

console.log(isSame(0,0)); // Should return true
console.log(isSame("abc", "abc")); // Should return true
console.log(isSame("a", "b")); // Should return false

console.log("---4---"); 
// Schreiben Sie eine Funktion, die drei Argumente aufnimmt und prüft, ob sie gleich sind.

const areSame = (arg1, arg2, arg3) => {
    return ((arg1===arg2)&&(arg2===arg3));
}

console.log(areSame(0,0, 0)); // Should return true
console.log(areSame("abc", "abc", "abc")); // Should return true
console.log(areSame("a", "b", "c")); // Should return false
console.log(areSame(0, 1, 0)); // Should return false
console.log(areSame(1, 1, 0)); // Should return false
console.log(areSame(0, 1, 1)); // Should return false
console.log(areSame(1, 0, 1)); // Should return false

console.log("---5---");
// Schreiben Sie eine Funktion, die 2 Argumente aufnimmt und das Multiplikationsprodukt zurückgibt.

const mult = (m1, m2) => { 
    return (m1 * m2);
}

console.log(mult(2,3)); // Should return 6
console.log(mult(4,7)); // Should return 28

console.log("---6---");
// Ändere diese Funktion.s
// Es sollte mult () von oben aufrufen und prüfen, ob das Ergebnis größer als Null ist.
const isResultGreaterThanZero = (number1, number2) => {
    if (mult(number1, number2) > 0){
        return true;
    } else {
        return false;
    }
}

console.log(isResultGreaterThanZero(-2, 5)); // Should return false
console.log(isResultGreaterThanZero(2, 5)); // Should return true

// Bonus:
   // 1.   Schreiben Sie eine Funktion, die alle Zahlen in einem Array negativ macht.
    //     [1, 2, -3, 4] sollte [-1, -2, -3, -4] zurückgeben
    const makeAllNegative = (array) => {
        resultArray = [];
        for(let i = 0; i<=array.length-1; i++){
            if(array[i] > 0){
                resultArray.push(array[i]*-1);
            } else {
                resultArray.push(array[i]);
            }
        }
        return resultArray;
    }
    let numbers = [1, 2, -3, 4];
    console.log(makeAllNegative(numbers)); 
    //2. Write a function that prints out all words in an array beginning with "a".
     //   ["hello", "world", "alright", "all"] should return ["alright", "all"]
    //3. write a function that checks if argument 1 is divisible by argument 2
      //  div(9, 3) should return true
      //  div(12, 5) should return false

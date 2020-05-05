// 1. Die größeren Zahlen. Erstellen Sie eine Funktion, die zwei
//  Argumente akzeptiert: das erste Argument ist ein Array von 
//  Zahlen und das zweite Argument ist eine Zahl. Die Funktion 
//  sollte die Elemente des Arrays zurückgeben, die größer als 
//  das zweite Argument sind.
// dh
console.log("__________________________1_________________________________");

function findGreatest(array, zahl){
    let tempArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] > zahl){
            tempArray.push(array[i]);
        }
    }
    return tempArray;      
 
}
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));
// findGreatest ([3, 4, 5], 4) ➞ 5
// findGreatest ([10, 20, 30], 12) ➞ 20, 30
// findGreatest ([0, 10, 3], 4) ➞ 10

// 2. Für das längste Wort. Erstellen Sie eine Funktion, 
// um das längste Wort in einer bestimmten Zeichenfolge zu finden.
// dh longestWord ("das ist ein Webentwicklungskurs") ➞ "Entwicklung"
console.log("__________________________2_________________________________");
function longestWord (satz){
    let satzArray = satz.split(" ");
    let momentanesGrostesWord = "";
    for (let i = 0; i < satzArray.length; i++){
        if (satzArray[i].length > momentanesGrostesWord.length){
            momentanesGrostesWord = satzArray[i];
        }
    }
    return momentanesGrostesWord; 
}

console.log(longestWord("this is a web development course"));

// 3. Umkehren. Erstellen Sie eine Funktion, um eine Zahl umzukehren.
// dh umgekehrt (34532) ➞ 23543
console.log("__________________________3_________________________________");
 // 1. Wandle die zahl in einen string um.
    // 2. Splitte den String in einen Array
    // 3. reverse den array (machee ihn rueckwaerts
    // 4. Wadnle den array wieder in einen String um (join)
    // 5. returne den neuen string

    function umgekehrt (zahl){
    
    let zahlenString = zahl.toString().split("").reverse().join("");
   return zahlenString
}
console.log(umgekehrt(34532));

// 4. AEIOU: Vokale. Erstellen Sie eine Funktion, die eine Zeichenfolge 
// in ihren Parametern verwendet und die Anzahl der Vokale 
// (dh auf Englisch "a, e, i, o, u") in der Zeichenfolge zählt.
// dh findVowels ("das ist ein String") ➞ 5;


console.log("___________________________4________________________________");
zehler = 0;

function findVowels (AEIOU) {
    for (let i = 0; i < AEIOU.length; i++){
    
       if (AEIOU[i].toLowerCase().includes("a")) { 
           zehler = zehler +1;
       }
       if (AEIOU[i].toLowerCase().includes("e")) { 
        zehler = zehler +1;
        }
        if (AEIOU[i].toLowerCase().includes("i")) { 
        zehler = zehler +1;
        }
        if (AEIOU[i].toLowerCase().includes("o")) { 
        zehler = zehler +1;
        }
        if (AEIOU[i].toLowerCase().includes("u")) { 
        zehler = zehler +1;
        }
    }
    return zehler
}
console.log(findVowels("das ist ein String"));

// 5. Fehlende Nummer. Erstellen Sie eine Funktion, die ein Array 
// aller Ganzzahlen zwischen 1 und 10 (mit Ausnahme einer) verwendet 
// und die fehlende Ganzzahl zurückgibt.
console.log("____________________________5_______________________________");
// let tempArray = [];
// function fehlendeNummer (zahlen){
//     for (let i = 0; i < zahlen.length; i++){
//         if( zahlen[i] - zahlen[i-1] != 1){

//         }
//     }

// }
console.log(fehlendeNummer([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(fehlendeNummer([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(fehlendeNummer([10, 5, 1, 2, 4, 6, 8, 3, 9]));

function fehlendeNummer(zahlen) {
    // Sort array
    sortArray(zahlen);
  
    // finding missing number here
    let result = 0;
    if (zahlen[0] > 1 || zahlen[zahlen.length - 1] < 1) {
      result = 1;
    } else {
      for (let i = 0; i < zahlen.length; i++) {
        if ((zahlen[i + 1] - zahlen[i]) > 1) {
          result = zahlen[i] + 1;
        }
      }
    }
    if (!result) {
      result = zahlen[zahlen.length - 1] + 1;
    }
    return result;
  }
  
  function sortArray(zahlen) {
    let temp;
    for (let i = 0; i < zahlen.length; i++) {
      for (let j = i + 1; j < zahlen.length; j++) {
        if (zahlen[j] < zahlen[i]) {
          temp = zahlen[j];
          zahlen[j] = zahlen[i];
          zahlen[i] = temp;
        }
      }
    }
  }
// Beispiele:
// fehlende Zahlen ([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// fehlende Zahlen ([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// fehlende Zahlen ([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

// 6. gewürfelt. Erstellen Sie eine Funktion, die ein Array von 
// Zahlen aufnimmt und die Summe ihrer Würfel zurückgibt.
console.log("__________________________6_______________________nicht richtig__________");
let sumOfCubes = function(a){
    let sumA=Math.pow(a,3)|| 0;
    return sumA;
}


console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
// Beispiele:
// sumOfCubes ([1, 5, 9]) ➞ 855 // Da 1 ^ 3 + 5 ^ 3 + 9 ^ 3 = 1 + 125 + 729 = 855
// sumOfCubes ([2]) ➞ 8
// sumOfCubes ([]) ➞ 0

// 7. Wörterbuch. Erstellen Sie eine Funktion, die eine 
// Anfangszeichenfolge und ein Array von Wörtern verwendet und 
// ein gefiltertes Array der Wörter zurückgibt, die mit den 
// gleichen Buchstaben wie die Anfangszeichenfolge beginnen.
// Anmerkungen:
// Wenn keines der Wörter übereinstimmt, geben Sie ein leeres
//  Array zurück.
// Halten Sie das gefilterte Array in derselben relativen 
// Reihenfolge wie das ursprüngliche Array von Wörtern.
console.log("____________________________7_______________________________");
function Wörterbuch (suche, wörter){
    let tempArray = [];
    for (let i = 0; i < wörter.length; i++) {
       if ( wörter[i].includes(suche)){
           tempArray.push(wörter[i]);
       } 
    }
    return tempArray

}
console.log(Wörterbuch("bu", ["button", "breakfast", "border"]));
console.log(Wörterbuch("tri", ["triplet", "try", "trip", "piano", "tree"]));
console.log(Wörterbuch("beau", ["pastry", "delicious", "name", "langweilig"]));

// Beispiele:
// Wörterbuch ("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// Wörterbuch ("tri", ["triplet", "try", "trip", "piano", "tree"]) ➞ ["triplet", "try", trip "]
// wörterbuch ("beau", ["pastry", "delicious", "name", "langweilig"]) ➞ []

// 8. Generator für gerade Zahlen. Erstellen Sie eine Funktion,
//  die alle geraden Zahlen von 1 bis zur angegebenen Zahl findet.
console.log("____________________________8_______________________________");
function geradeZahlen (zahl){
let tempArray = [];
    for (let i = 1; i < zahl +1; i++) {
        if( i%2 === 0){
        tempArray.push(i);
    }  
    }
return tempArray
}

console.log(geradeZahlen(8));
console.log(geradeZahlen(4));
console.log(geradeZahlen(2));

// Beispiele:
// geradeZahlen (8) ➞ [2, 4, 6, 8]
// geradeZahlen (4) ➞ [2, 4]
// geradeZahlen (2) ➞ [2] Notizen:
// Wenn es keine geraden Zahlen gibt, geben Sie ein leeres Array zurück.
// Fügen Sie keine 0 ein.
// Bonus: Alphabetische Reihenfolge. Erstellen Sie eine Funktion, um 
// eine Zeichenfolge in alphabetischer Reihenfolge zu sortieren. 
// NB: Angenommen, die Zeichenfolge enthält keine Zahlen, Symbole
// und Satzzeichen.
// dh alphaOrder ("webdev") ➞ "bdeevw"
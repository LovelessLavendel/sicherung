// Objects: Part 2
// 1. Check if a number is within a given range. Write a program that checks 
// if a number is within the range of an object
// 's min and max properties. Assume min <= max is always true.

// Examples:

// 4, { min: 0, max: 5 }) ➞ true
// 4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
// 5, { min: 5, max: 5 }) ➞ true
// 2. Scrabble. Write a program that, given an array of scrabble tiles,
//  counts the maximum score that a player can earn from the tiles in 
//  their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 },
//   { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },
//    { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

// 3. Is it an empty object? Write a program that returns true if an object is empty,
//  and false if otherwise.

// Examples:

// {} ➞ true
// {a: 1} ➞ false
// 4. Counting Letters. Create a function that counts the number of occurrences
//  of each letter in a string. Return an object with key pair values of letters 
//  and the number of occurrences for each letter.

// Example:

// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
// 5. Free Shipping. Create a function that determines whether an online order
//  should get free shipping. An order gets free shipping if the total cost of
//   items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
// 6. Programming Object.

// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// Write the command to add the language "Go" to the end of the languages array.

// Change the difficulty to the value of 7.

// Using the delete keyword, write the command to remove the jokes key from the 
// programming object.

// Write a command to add a new key called isFun and a value of true to the programming 
// object.

// Using a loop, iterate through the languages array and console.log all of the languages.

// Using a loop, console.log all of the keys in the programming object.

// Using a loop, console.log all of the values in the programming object.

// Create an object method where if the keys "isChallenging" and "isRewarding" have values 
// of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go"
//  is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log
//   an object method without calling it and why.

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.
//_______________________________________________________________________________________
//---------------------------------------------------------------------------------------
//________________________________________________________________________________________

// Objekte: Teil 2
// 1. Prüfen Sie, ob eine Zahl innerhalb eines bestimmten Bereichs liegt. Schreiben 
// Sie ein Programm, das prüft, ob eine Zahl innerhalb des Bereichs der Min- und 
// Max-Eigenschaften eines Objekts liegt. Nehmen Sie an, dass min <= max immer wahr ist.

console.log("____________________________1_____________________________");
const checkNumber = (num, object) => {
    if (object.min <= num && object.max >= num) {
        return true
    } else {
        return false
    }
}
console.log(checkNumber(4, { min: 0, max: 5 }))
console.log(checkNumber(4, { min: 4, max: 5 }))
console.log(checkNumber(4, { min: 6, max: 10 }))
console.log(checkNumber(5, { min: 5, max: 5 }))
// Beispiele:

// 4, { min: 0, max: 5 }) ➞ wahr
// 4, { min: 4, max: 5 }) ➞ wahr
// 4, { min: 6, max: 10 }) ➞ falsch
// 5, { min: 5, max: 5 }) ➞ wahr


// 2. Scrabble. Schreiben Sie ein Programm, das bei einer Anordnung von Scrabble-Steinen
//  die maximale Punktzahl zählt, die ein Spieler mit den Steinen in seiner Hand erzielen
//   kann.

console.log("____________________________2_____________________________");
let GesamtZahl = [
    { Kachel: "N", Punktzahl: 1 },
    { Kachel: "K", Punktzahl: 5 },
    { Kachel: "Z", Punktzahl: 10 },
    { Kachel: "X", Punktzahl: 8 },
    { Kachel: "D", Punktzahl: 2 },
    { Kachel: "A", Punktzahl: 1 },
    { Kachel: "E", Punktzahl: 1 }
]
const spiel = (array) => {
    let punktzahlSum = 0;
    for (let i = 0; i < array.length; i++) {
        punktzahlSum = punktzahlSum + array[i].Punktzahl;
    }
    return punktzahlSum;
}
console.log(spiel(GesamtZahl));

//    Beispiel: [ { Kachel: "N", Punktzahl: 1 },
//     { Kachel: "K", Punktzahl: 5 },
//      { Kachel: "Z", Punktzahl: 10 },
//       { Kachel: "X", Punktzahl: 8 },
//        { Kachel: "D", Punktzahl: 2 },
//         { Kachel: "A", Punktzahl: 1 },
//          { Kachel: "E", Punktzahl: 1 } ]

// Die maximale Punktzahl des Spielers: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

// 3. Ist es ein leeres Objekt? Schreiben Sie ein Programm, das true zurückgibt, 
// wenn ein Objekt leer ist, und false, wenn nicht.

console.log("____________________________3_____________________________");
const daten = {
}
const datenRegister = (datenObjekt) => {
    console.log(Object.keys(datenObjekt));
    if (Object.keys(datenObjekt).length === 0) {
        console.log("fehler, das objekt ist leer");
    } else {
        console.log("der daten: " + datenObjekt.name + " wurde registriert");
    }
}

datenRegister(daten);
// Beispiele:

// {} ➞ wahr
// {a: 1} ➞ falsch

// 4. Briefe zählen. Erstellen Sie eine Funktion, die die Anzahl der Vorkommnisse 
// jedes Buchstabens in einer Zeichenfolge zählt. Geben Sie ein Objekt mit
//  Schlüsselpaarwerten von Buchstaben und der Anzahl der Vorkommen für jeden
//   Buchstaben zurück.

console.log("____________________________4_____________________________");

const counter = (word) => {
    let result = {};
    for (let i = 0; i < word.length; i++) {
        if (result[word[i]] === undefined) {
            result[word[i]] = 1;

        } else {
            result[word[i]] += 1;
        }
    }
    return result;
}
console.log(counter("tree"));
// Beispiel:

// countLetters("Baum") ➞ {t: 1, r: 1, e: 2}

// 5. Kostenloser Versand. Erstellen Sie eine Funktion, die bestimmt, ob eine 
// Onlinebestellung versandkostenfrei sein soll. Eine Bestellung wird versandkostenfrei,
//  wenn die Gesamtkosten der Artikel 50 € überschreiten.

console.log("____________________________5_____________________________");
let freeVersand = {
    "Schwamm": 3.50,
    "Seife": 5.99,
    "Surround Sound Equipment": 499.99,
    "Wolle": 13.99,
    "Stricknadeln": 15.50,
    "Tasche": 13.99
}

const freeVersand1 = (object) => {
    temp = 0;
    for (key in object) {
        temp += object[key]
    }
    if (temp <= 50) {
        return false;
    }
    return true;
}

console.log(freeVersand1({ "Schwamm": 3.50, "Seife": 5.99 }));
console.log(freeVersand1({ "Surround Sound Equipment": 499.99 }));
console.log(freeVersand1({ "Wolle": 13.99, "Stricknadeln": 15.50, "Tasche": 13.99 }));
Beispiele:

// freeShipping({ "Schwamm": 3.50, "Seife": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wolle": 13.99, "Stricknadeln": 15.50, "Tasche": 13.99 }) ➞ false

// 6. Objekt Programmierung.
console.log("____________________________6_____________________________");
// konstitutionelle Programmierung = {
//   Sprachen: ["JavaScript", "Python", "Ruby"],
//   isHerausforderung: wahr,
//   isBelohnung: wahr,
//   Schwierigkeit: 8,
//   Witze:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
let konstitutionelle_Programmierung = {
    Sprachen: ["JavaScript", "Python", "Ruby"],
    isHerausforderung: true,
    isBelohnung: true,
    Schwierigkeit: 8,
    Witze: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}


// Schreiben Sie den Befehl zum Hinzufügen der Sprache "Go" an das Ende des Sprachenarrays.
konstitutionelle_Programmierung.Sprachen.push("Go");
// Ändern Sie den Schwierigkeitsgrad auf den Wert 7.
konstitutionelle_Programmierung.Schwierigkeit = 7;
// Schreiben Sie den Befehl, um den Schlüssel "Witze" aus dem Programmierobjekt zu entfernen,
//  indem Sie das Schlüsselwort "delete" verwenden.
delete konstitutionelle_Programmierung.Witze;
// Schreiben Sie einen Befehl, um einen neuen Schlüssel namens isFun und den Wert true zum 
// Programmierobjekt hinzuzufügen.
konstitutionelle_Programmierung.isFun = "yes";
console.log(konstitutionelle_Programmierung);

// Verwenden Sie eine Schleife, um durch das Sprachenarray und console.log alle Sprachen zu
//  iterieren.
let konstitutionelle_Programmierung1 = {
    Sprachen: ["JavaScript", "Python", "Ruby"],
    isHerausforderung: true,
    isBelohnung: true,
    Schwierigkeit: 8,
    Witze: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
ausgabeSprachen = "";
for (let i = 0; i < konstitutionelle_Programmierung1.Sprachen.length; i++) {
    console.log(konstitutionelle_Programmierung1.Sprachen[i]);
}

console.log(ausgabeSprachen);
// Mithilfe einer Schleife protokolliert console.log alle Schlüssel im Programmierobjekt.
let konstitutionelle_Programmierung2 = {
    Sprachen: ["JavaScript", "Python", "Ruby"],
    isHerausforderung: true,
    isBelohnung: true,
    Schwierigkeit: 8,
    Witze: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
ausgabeKeys = "";
for (let i = 0; i < Object.keys(konstitutionelle_Programmierung2).length; i++) {

    console.log(Object.keys(konstitutionelle_Programmierung2)[i]);
}

console.log(ausgabeKeys);
// Mit Hilfe einer Schleife werden alle Werte im Programmierobjekt in console.log protokolliert.
let konstitutionelle_Programmierung3 = {
    Sprachen: ["JavaScript", "Python", "Ruby"],
    isHerausforderung: true,
    isBelohnung: true,
    Schwierigkeit: 8,
    Witze: "http://stackoverflow.com/questions/334075/what-is-your-best-programmer-joke"
}
ausgabeValues = "";
for (let i = 0; i < Object.values(konstitutionelle_Programmierung3).length; i++) {

    console.log(Object.values(konstitutionelle_Programmierung3)[i]);
}

console.log(ausgabeValues);
// Erstellen Sie eine Objektmethode, bei der, wenn die Tasten "isChallenging" und "isRewarding"
//  den Wert "true" haben, "Learning the programming languages" zurückgegeben wird: "JavaScript,
//   Python, Ruby, Go" lohnend und herausfordernd ist. Bonus: Erklären Sie in einem Kommentar,
//    was gedruckt wird, wenn wir console.log eine Objektmethode ohne Aufruf aufrufen und warum.



let konstitutionelle_Programmierung5 = {
    Sprachen: ["JavaScript", "Python", "Ruby"],
    isHerausforderung: true,
    isBelohnung: true,
    Schwierigkeit: 8,
    Witze: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
   Methode(){
        if(this.isHerausforderung && this.isBelohnung){
            console.log("Programming is challenging and rewarding");
        }
    }
  }
  
konstitutionelle_Programmierung5.Methode();
// Der Bonus:
console.log("____________________________Bonus_____________________________");
// Stellen Sie sicher, dass kein anderer Code die Eigenschaften des Objekts löschen oder
//  ändern kann.
let konstitutionelle_Programmierung4 = {
    Sprachen: ["JavaScript", "Python", "Ruby"],
    isHerausforderung: true,
    isBelohnung: true,
    Schwierigkeit: 8,
    Witze: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
  Object.seal(konstitutionelle_Programmierung4);
  


konstitutionelle_Programmierung4.nichts = "darf nicht sein";
console.log(konstitutionelle_Programmierung4);


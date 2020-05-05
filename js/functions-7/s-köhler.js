console.log ("______________1_______________");
// 1. Addieren. Erstellen Sie eine Funktion, die eine 
// Zahl als Argument verwendet. Addieren Sie alle Zahlen
//  von 1 zu der Zahl, die Sie an die Funktion übergeben
//   haben. Wenn die Eingabe beispielsweise 4 ist, sollte
//    Ihre Funktion 10 zurückgeben, da 1 + 2 + 3 + 4 = 10.

let zahl = [4];
let addUp = function(zahlArray){
    let localArray = []
   let anfang = 0;
    for(let i = 0; i <= zahlArray; i++){ 
        anfang += i;
        localArray.push(anfang);
    }
    return anfang;
}
console.log(addUp(zahl));
// let dodac = (m) => {
//     let array2 = 0;
//     for (i = 0; i <= m; i++) {
//         array2 += i;
//     }
//     return array2;
// }
// console.log(dodac(4));

// let numbers = [10, 20, 30, 40] // sums to 100
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// Beispiele:
// addUp (4) ➞ 10
// addUp (13) ➞ 91
// addUp (600) ➞ 180300
console.log ("________________2_____________");
// 2. gewürfelt. Erstellen Sie eine Funktion, die drei 
// Zahlen enthält und die Summe ihrer Würfel zurückgibt.
let sumOfCubes = function(a){
    let sumA=Math.pow(a,3)|| 0;
    return sumA;
}
console.log(sumOfCubes(2));
// Beispiele:

// sumOfCubes (1, 5, 9) ➞ 855 // Da 1 ^ 3 + 5 ^ 3 + 9 ^ 3 = 1 + 125 + 729 = 855
// sumOfCubes (2) ➞ 8
// sumOfCubes () ➞ 0
console.log ("______________3_______________");
// 3. String Check. Erstellen Sie eine Funktion, die eine 
// Zeichenfolge und ein Wort akzeptiert und dann true oder
//  false zurückgibt, je nachdem, ob das Wort mit der 
//  Anfangszeichenfolge beginnt.

// const strinStartChecker = (anfangString, ganzerString) => {
//     if (ganzerString.includes(anfangString) && anfangString[0] === ganzerString[0]){
//         console.log("ja");
//     }
// }
// strinStartChecker("bo", "botenn")

const strinStartChecker = (anfangString, ganzerString) => {
    if (ganzerString.startsWith(anfangString)) {
       return
    }
}
strinStartChecker("bo", "botenn")
// Beispiele:

// Wörterbuch ("bu", "button") ➞ wahr
// Wörterbuch ("Tri", "Triplett") ➞ wahr
// wörterbuch ("beau", "pastry") ➞ false
console.log ("________________4_____________");
// 4. Weniger als oder gleich Null? Erstellen Sie eine Funktion,
//  deren einziges Argument eine Zahl ist und die true zurückgibt,
//   wenn sie kleiner oder gleich null ist. Anderenfalls wird 
//   false zurückgegeben.

let zahl1 = [4];
let lessThanOrEqualToZero = function(zahlArray){
    let localArray = []
   let anfang = 0;
    for(let i = 0; i <= zahlArray; i++){ 
        
        localArray.push(anfang );
    }
    return zahlArray;
}
console.log(lessThanOrEqualToZero(zahl1 <= 0));
// Beispiele:
// lessThanOrEqualToZero (3) ➞ false
// lessThanOrEqualToZero (0) ➞ true
// lessThanOrEqualToZero (-4) ➞ wahr
// lessThanOrEqualToZero (10) ➞ false
console.log ("__________________5___________");
// 5. Vorkommen zählen. Erstellen Sie eine Funktion, die zwei
//  Argumente akzeptiert: eine Zeichenfolge und einen Buchstaben.
//   Die Funktion sollte die Anzahl der Vorkommen dieses 
//   Buchstabens in der Zeichenfolge zählen.

// function countOccurrences ( string, suche ){
//   let i=0;
//      for (let x = 0; x <= string.length -1; x++) {
//         if (string.charAt(x) == suche  ) {
//             result = result+1;
//             }
//             return result;
// }

//  //console.log(countOccurrences("das ist ein String", "i"));

// ie countOccurrences ("das ist ein String", "i")) 3

console.log ("_________________6____________");
// 6. X nach der Potenz von X. Erstellen Sie eine Funktion, 
// die eine Basiszahl und eine Exponentenzahl verwendet und
//  die Berechnung zurückgibt. NB: Alle Testeingaben sind
//   positive ganze Zahlen.

// Beispiele:

// berechneBasiszuKomponente (5, 5) ➞ 3125
// berechneBasiszuKomponente (10, 10) ➞ 10000000000
// berechneBasiszuKomponente (3, 3) ➞ 27
console.log ("________________7_____________");
// 7. Wo ist Waldo? Erstellen Sie eine Funktion, die eine
//  Zeichenfolge akzeptiert und true zurückgibt, wenn Waldo
//   gefunden wird, und false, wenn dies nicht der Fall ist.

function isWaldoHere(string, gesucht){
    if (string.includes (gesucht)){
        return true;
    } else{
        return false;
    }
}
console.log(isWaldoHere("Ich habe dich gefunden, Waldo!", "Waldo"));
// Beispiele:

// isWaldoHere ("Gibt es hier was?") ➞ false
// isWaldoHere ("Ich habe dich gefunden, Waldo!") ➞ wahr
// isWaldoHere ("ist wally hier?") ➞ false
// isWaldoHere ("waldo is here") ➞ wahr
console.log ("__________________8___________");
// 8. Pie. Erstellen Sie eine Funktion, die bestimmt, ob es 
// möglich ist, einen Kreis anhand dieser drei Parameter 
// gerecht zu teilen:

// Gesamtzahl der Scheiben.
// Anzahl der Empfänger.
// Wie viele Scheiben jeder Mensch bekommt.
// Beispiele:
function equalSlices ( anzahl, personen, anzahlPro){
    if (anzahl % (personen * anzahlPro) === 0){
        return true;
    } else {
        return false;
    }
}
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(24, 12, 2));


// equalSlices (11, 5, 3) ➞ false // 5 Personen x je 3 Scheiben = 15 Scheiben> 11 Scheiben
// equalSlices (8, 3, 2) ➞ tru
// equalSlices (8, 3, 3) ➞ false
// equalSlices (24, 12, 2) ➞ true

console.log ("_________________9____________");
// 9. XO Erstellen Sie eine Funktion, die eine Zeichenfolge
//  akzeptiert, prüft, ob sie die gleiche Anzahl von 'x' 
//  und 'o' enthält, und gibt entweder true oder false zurück.

// Anmerkungen:

// Rückgabe eines Booleschen Wertes (true oder false).
// Die Zeichenfolge kann ein beliebiges Zeichen enthalten.
// Wenn sich weder ein x noch ein o in der Zeichenfolge befindet,
//  geben Sie true zurück.

function XO ( text ){
    let zehlerO = 0;
    let zehlerX = 0;

     for (let i = 0; i <= text.length -1; i++) {
        if ("o" == text[i]) {
                zehlerO += 1;
            }
        if ("x" == text[i]) {
            zehlerX += 1;
        }   
     }
        if (zehlerO === zehlerX){
            return true;
     } else {
         return false;
     }
    
    
}
console.log(XO("ooxx"));
console.log(XO("xooxx"));
// Beispiele:

// XO ("ooxx") ➞ wahr
// XO ("xooxx") ➞ false
// XO ("ooxXm") ➞ true (Groß- / Kleinschreibung wird nicht berücksichtigt)
// XO ("zpzpzpp") ➞ true (gibt true zurück, wenn kein x und o vorhanden sind)
// XO ("zzoo") ➞ false
console.log ("________________10_____________");
// 10. isPrime? Erstellen Sie eine Funktion, die true zurückgibt,
//  wenn eine Zahl eine Primzahl ist, und false, wenn dies nicht 
//  der Fall ist. Hinweis: Eine Primzahl ist eine positive ganze 
//  Zahl größer als 1 , die nur durch zwei Teiler gleichmäßig 
//  teilbar ist: sich selbst und 1 . Die ersten zehn Primzahlen 
//  sind 2, 3, 5, 7, 11, 13, 17, 19, 23 und 29.

// Beispiele:
function isPrime (primZahl){
    if (primZahl % 2 === 0){
        return true;
    } else {
        return false;
    } 
}

console.log(7);
// isPrime (7) ➞ true
// isPrime (9) ➞ false
// isPrime (10) ➞ false
console.log ("___________________11__________");
// 11. Email validieren. Erstellen Sie eine Funktion, die eine 
// Zeichenfolge akzeptiert, prüft, ob es sich um eine gültige 
// E-Mail-Adresse handelt, und gibt dementsprechend entweder 
// true oder false zurück.
function emailCheck (email){
    if (!email.includes ("@")){  // mit ! kehre ich das um
            return "Die E-Mail adresse ist falsch es fehlt ein @";
    }
    if (!email.includes (".")){
        return "Die E-Mail adresse ist falsch es fehlt ein .";
} else {
    return email + " ist Gültig!"
    }
}
console.log(emailCheck("john@smithcom"));
console.log(emailCheck("johnsmith.com"));
console.log(emailCheck("john@example.com"));
// function isWaldoHere(string, gesucht){
//     if (string.includes (gesucht)){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isWaldoHere("Ich habe dich gefunden, Waldo!", "Waldo"));
// Die Zeichenfolge muss ein "@" enthalten.
// Die Zeichenfolge muss ein "." Enthalten. Charakter.
// Das "@" muss mindestens ein Zeichen vor sich haben.
// zB " john@example.com " ist gültig, während "@ example.com" ungültig ist.
// Das "." und das "@" muss an den entsprechenden Stellen sein.
// Beispiel: "john.smith@com" ist ungültig, während " john.smith@email.com " gültig ist.
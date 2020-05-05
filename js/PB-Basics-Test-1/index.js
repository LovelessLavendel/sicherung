// Add answers here 

// # Test - Grundlagen der Programmierung

// ## Testanleitung
// * Arbeiten Sie mit der in diesem Repository enthaltenen Datei "index.js".
// * Befolgen Sie alle nachstehenden Anweisungen, um den Test abzuschließen.
//  ** Wichtig **: Stellen Sie sicher, dass die Namen Ihrer Variablen / Funktionen
//   mit den Namen in den Anweisungen unten übereinstimmen.
// * Denken Sie daran, alle Ihre Lösungen zu drucken.
// * Viel Glück!

// ### Bedingte Algorithmen

// #### 1. Los oder neu?
// * Erstellen Sie eine Funktion mit dem Namen "_nameOfCity_". Wenn eine Zeichenfolge mit 
// "_Los_" oder "_New_" beginnt, drucken Sie die gesamte Zeichenfolge. Wenn nicht, drucken
//  Sie "_Der Name der Stadt beginnt nicht mit Los oder Neu_". Achten Sie auf die Groß- und
//   Kleinschreibung.
console.log("---------------1---------------");
    

function _nameOfCity_(stadt){
    let temp = "";
    if (stadt.substring(0,3) === "Los") {
       return stadt;
    } 
    if (stadt.substring(0,3) === "Neu") {
        return stadt;
    } else {
        return "Der Name der Stadt beginnt nicht mit Los oder Neu"
    }
    return temp;
}

console.log(_nameOfCity_("Los Anelis"));
console.log(_nameOfCity_("Neu Berlin"));
console.log(_nameOfCity_("Berlin"));
// #### 2. isDivisible?
// * Erstellen Sie eine Funktion mit dem Namen "_isDivisible_". Die Funktion sollte eine 
// Ganzzahl als Argument verwenden. Wenn die Ganzzahl durch 100 teilbar ist, geben Sie true 
// zurück. Wenn nicht, geben Sie false zurück. ** Beispiele **: _1 ➞ false_, _1000 ➞ true_, 
// _100 ➞ true_.
console.log("----------------2--------------");

function isDivisible(zahl){
    if (zahl % 100 === 0){
        return true;
    } else {
    return false;  
    } 
}
console.log(isDivisible(1));
console.log(isDivisible(1000));
// #### 3. Fehlender Winkel
// * Erstellen Sie eine Funktion mit dem Namen "_missingAngle_", die den fehlenden Winkel eines
//  Dreiecks entweder als spitz, recht oder stumpf klassifiziert.
// ** Hinweise **: Ein spitzer Winkel ist kleiner als 90 °, ein rechter Winkel ist genau 90 ° 
// und ein stumpfer Winkel ist größer als 90 ° (aber kleiner als 180 °).
//     > ** Beispiele **:
//     - 11 °, 20 ° sollten "_obtuse_" zurückgeben, da der fehlende Winkel 149 ° betragen würde
//     - 27 °, 59 ° ➞ Der dritte Winkel ist 92 °, also "_obtuse_"
//     - 135 °, 11 ° ➞ Der dritte Winkel ist "_acute_"
//     - 45 °, 45 ° ➞ Der dritte Winkel ist ein "rechter Winkel"
console.log("-----------------3-------------");
function _missingAngle_(winkel1, winkel2){
if (((winkel1 + winkel2) - 180) >= 90){
    return _acute_;
} //else {
     //return _obtuse__;
    //}
}


console.log(_missingAngle_(11, 20 ));
console.log(_missingAngle_(27, 59 ));
console.log(_missingAngle_(135, 11 ));
console.log(_missingAngle_(45, 45 ));
// #### 4. Wie ist das Wetter?
// * Verwenden Sie einen ternären Operator, um diese Aufgabe abzuschließen. Erstellen Sie eine
//  Funktion mit dem Namen "_isRaining_". Wenn dies zutrifft, drucken Sie 
//  "_wet day - you need a umbrella_". Wenn falsch, drucken Sie 
//  "_dry Tag - lassen Sie Ihren Regenschirm zu Hause _".

// ### Schleifen
console.log("------------------4------------");// Die aufgabe nicht verstanden!
// function _isRaining_(wet_day, dry_Tag){
    
//         console.log((wet_day = dry_Tag) ? wet_day:dry_Tag);
//         }
    

// console.log(_isRaining_());
// console.log(_isRaining_());
// #### 1. Sequenz
// * Erstellen Sie eine Funktion mit dem Namen "_geometricalSequence_" und drucken Sie mit einer
//  Schleife die folgende Sequenz: _`1 2 4 8 16 32 64 128 256`_. Verketten Sie jeden Wert mit einer
//   Zeichenfolge und geben Sie eine Zeichenfolge zurück.
console.log("-------------------s.1-----------");
// #### 2. Vielfache
// * Erstellen Sie eine Funktion mit dem Namen "_multiplesOfThree_" und verwenden Sie eine Schleife,
//  um die ersten fünf Vielfachen von drei zu drucken: _`3 6 9 12 15`_. Verketten Sie jeden Wert mit
//   einer Zeichenfolge und geben Sie eine Zeichenfolge zurück.

// ### Mathematik
console.log("-------------------s.2-----------");
// #### 1. Du hast die Macht
// * Erstellen Sie eine Funktion mit dem Namen "_powerOf_", die eine Ganzzahl als Argument verwendet 
// und die Ganzzahl in die Potenz ihrer selbst zurückgibt. Sie sollten ein mathematisches Objekt
//  verwenden, um die Berechnung durchzuführen.
//     > ** Beispiele **:
//     - `` `Javascript
//         powerOf (3) // 27
//         `` `

//     - `` `Javascript
//         powerOf (4) // 256
//         `` `

// ### Probleme lösen
console.log("-------------------s.3--------falsch nicht fertig---");
// function _powerOf_(a, b){
//     let sum = 0;
//    a = Math.pow(a,a) || 0;
//      b = Math.pow(b,b) || 0;
//     return sum;
// }
// console.log(_powerOf_());
// #### 1. Wie viele?
// * Erstellen Sie eine Funktion mit dem Namen "_vowelCount_", die eine Zeichenfolge als Argument 
// akzeptiert. Überprüfen Sie, wie viele Vokale die Zeichenfolge gegebenenfalls enthält. Gibt die 
// Vokalzahl der Zeichenkette zurück.
//     > ** Beispiele **:
//     - `` `Javascript
//       vokalanzahl ("hallo") // 2
//       `` `
//     - `` `Javascript
//       vokalanzahl ("test") // 1
//       `` `
//     - `` `Javascript
//       vokalanzahl ("fbw") // 0
  //    `` `





// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};


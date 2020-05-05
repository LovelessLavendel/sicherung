
console.log("Aufgabe 1");
// sumOfNumbers. Erstellen Sie ein Programm, das die Zahlen in einem Array 
// (von mindestens 3 Zahlen) addiert. Bonus : Drucken, um sowohl die Summe 
// als auch das Produkt dieser Zahlen zu überprüfen.
let zahlenArray = [1, 3 ,7, 10];
let summe = 0;
let produkt = 1;
for(let i = 0; i < zahlenArray.length; i++){
    summe = summe + zahlenArray[i];
    produkt = produkt * zahlenArray[i];
}
console.log(summe);
console.log(produkt);
console.log("Aufgabe 2");
// Hallo Frien Erstelle ein Array mit den Namen deiner Freunde und deiner 
// Familie. Schleife über das Array und grüße jeden Freund zB Hallo Maria! 
// Hallo Mike! usw. Bonus : Drucken Sie die Indizes der einzelnen Elemente 
// im Array. Beispiel für die erwartete Ausgabe: Mike befindet sich auf 
// Index 1 des Arrays meiner Freunde.


let leute = ["apple", "orange", "banana",'Peter', 'Paul', 'Mary'];
for(let i = 0; i<= leute.length-1; i++){
    console.log(leute[i]+(" hallo")); 
}
let friends = ["Mike", "Maria", "Joe", "John"];
for(let i = 0; i<friends.length; i++){
    console.log(`${friends[i]} is at index ${i} of my friends array`);
}
console.log("Aufgabe 3");
// Städtenamen. Erstellen Sie eine Reihe von Städtenamen. Durchlaufen Sie
//  das Array und fügen Sie die Städtenamen zu einer Zeichenfolge hinzu. 
//  Beispiel für die erwartete Ausgabe: "Berlin, Paris, Prag, Rom".

let cities = ["Berlin", "Paris", "Prague", "Rome"];
let newCities = "";
for(let i = 0; i<cities.length; i++){
    newCities = newCities + cities[i]+ ", " ;
}
console.log(newCities);
console.log("Aufgabe 4 ");
// Chancen und Evens. Erstellen Sie ein Programm, das ein bestimmtes Array 
// ändert, indem Sie zu jeder ungeraden Ganzzahl 1 addieren und von jeder
//  geraden Ganzzahl 1 subtrahieren. Beispiele:

// [3, 5, 2, 4] ➞ erwartete Ausgabe: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ erwartete Ausgabe: [5, 10, 9, 19]
let zahlen = [3, 5, 2, 4];

for(let i = 0; i<zahlen.length; i++){
    if(zahlen[i] % 2 === 0){
        zahlen[i] = zahlen[i] - 1;
    } else {
        zahlen[i] = zahlen[i] + 1;
    }
}
console.log(zahlen);
console.log("Aufgabe 5");
// Profitieren. Erstellen Sie ein Programm, bei dem der erste Buchstabe
//  jedes Elements in einem Array von Namen groß geschrieben wird. Beispiele:
// ["matt", "sara", "lara"] ➞ ["matt", "sara", "lara"]

// ["samuel", "maria", "luke", "mary"] ➞ ["samuel", "maria", "luke", "maria"]

// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// Hinweis: Halten Sie die Namen in derselben Reihenfolge und achten Sie darauf,
//  dass nur die erste Lektion des Namens in Großbuchstaben geschrieben wird 
//  (siehe "Maria" im zweiten Beispiel oben).

let namme = ["samuel", "MARIA", "luke", "mary"] ;
for(let i = 0; i<= namme.length-1; i++){
    namme[i] = namme[i].toLowerCase();
    namme[i] = namme[i].charAt(0).toUpperCase()+ namme[i].substring(1);
console.log(namme[i]); 
}

console.log("Aufgabe 6");
// Wiederhole es. Erstellen Sie ein Programm mit zwei Variablen: "item" und 
// "times". Erstellen Sie ein Programm, das "item" so oft wiederholt, wie 
// durch "times" angegeben. Die erste Variable ("item") ist das Element,
//  das wiederholt werden muss, während das zweite Argument ("times") angibt, 
//  wie oft das Element wiederholt werden soll. Drucken Sie das Ergebnis in einem Array.
// Beispiel: ("Beispiel", 3) ➞ ["Beispiel", "Beispiel", "Beispiel"]


let times = 5;
let item = ["hallo"];
for(let i = 0; i<= times-1; i++){
    
    console.log (item);
}
    
let repeater = function( item, times){

    let lockalArray = [];
    for (let y = 0; y < times; y++){
    lockalArray.push(item);
    }
    return lockalArray; 
}
console.log(repeater("hallo", 3));

console.log("Aufgabe Bonus");
// Boni - Wählen Sie die Schleife

// function  ergebnis(item){
//     if item = 5;
// }
// Faktoren. Eine Faktorkette ist ein Array, in dem jedes vorherige Element ein
//  Faktor des nächsten aufeinanderfolgenden Elements ist. Das Folgende ist 
//  eine Faktorkette: [3, 6, 12, 36]

// // 3 ist ein Faktor von 6 (3 * 2 = 6)
// // 6 ist ein Faktor von 12 (6 * 2 = 12)
// // 12 ist ein Faktor von 36 (12 * 3 = 36)
// Erstellen Sie ein Programm, das feststellt, ob ein bestimmtes Array eine 
// Faktorkette ist oder nicht.

// Beispiele
// [1, 2, 4, 8, 16, 32] ➞ wahr
// [1, 1, 1, 1, 1, 1] ➞ wahr
// [2, 4, 6, 7, 12] ➞ falsch
// [10, 1] ➞ falsch
// Keine Duplikate! Ein Set ist eine Sammlung einzigartiger Gegenstände. 
// Ein Satz kann aus einem Array gebildet werden, indem alle doppelten Elemente
//  entfernt werden. Erstellen Sie ein Programm, das ein Array in eine Reihe 
//  eindeutiger Werte umwandelt. Siehe die folgenden Beispiele. Beispiel:

// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// [1, 6, 6, 9, 9] ➞ [1, 6, 9]

// [2, 2, 2, 2, 2] ➞ [2]

// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
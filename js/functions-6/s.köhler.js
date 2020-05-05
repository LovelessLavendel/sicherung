// 1. Nummer zu Monatsname
// Erstellen Sie eine Funktion, die eine Zahl (von 1 bis 12) 
//annimmt und den entsprechenden Monatsnamen als Zeichenfolge zurückgibt. Wenn Sie beispielsweise 3 als Eingabe erhalten, sollte Ihre Funktion "März" zurückgeben, da März der 3. Monat ist.

// Beispiele:
// monthName (3) ➞ "March"
// monthName (12) ➞ "Dezember"
// monthName (6) ➞ "June"

console.log( "aufgabe 1");

let tagMonat = function(monatsZahl){
    let monat = ["Januar","Febura","Märtz","April","Juni","Juli",
                    "August","November","Dezeber"];
     
    return "Es ist "+ monat[monatsZahl-1] +"."; 
}
console.log(tagMonat(3)); // Es ist März

// 2. Pech 13
// Entfernen Sie bei einem sortierten Array von Zahlen alle durch 13 teilbaren Zahlen. Geben Sie das geänderte Array zurück.

// Beispiele:
// unglücklich13 ([53, 182, 435, 591, 637]) ➞ [53, 435, 591] // 182 und 637 sind durch 13 teilbar.
// unlucky13 ([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279] // Keine Zahlen im Array sind durch 13 teilbar.
// unlucky13 ([104, 351, 455, 806, 871]) ➞ [] // Alle Zahlen im Array sind durch 13 teilbar.
console.log( "aufgabe 2");

// let zahl = [104, 351, 455, 806, 871];


// let ergebnis = function(duch){
//         zahlDuch = zahl / duch;
//         test = zahl%duch <= 1 ;
//     return   test;
// }
// console.log(ergebnis(13));
let zahlen = [104, 351, 455, 806, 871];
let unlucky13 = function(zahlenArray){
    let localArray = []
    for(let i = 0; i < zahlen.length; i++){ 
        if(zahlenArray[i]%13 !== 0){ 
            localArray.push(zahlenArray[i]); //hier ändern

        }
    }
    return localArray;
}

console.log(unlucky13(zahlen));  // [] ist richtig


// 3. Filtern Sie Strings aus einem Array heraus
// Erstellen Sie eine Funktion, die Zeichenfolgen aus einem Array herausfiltert und ein neues Array zurückgibt, das nur Ganzzahlen enthält.

// Beispiele:
// filterList ([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
// filterList ([1, "a", 2, "b", 3, "c"]) ➞ [1, 2, 3]
// filterList ([0, -32, "& @ A", 64, 99, -128]) ➞ [0, -32, 64, -128]
console.log( "aufgabe 3");
    let array= [0, -32, "& @ A", 64, 99, -128];
 let filterList = function( filter) {
    let localArray = []
    for(let i = 0; i < filter.length; i++){
        if( typeof filter[i]  !== "string"){
            localArray.push(filter[i]);
        }
    }
    return localArray;
 }
console.log(filterList(array));

// 4. Unterschied zwischen Max- und Min-Zahlen in einem Array
// Erstellen Sie eine Funktion, die ein Array annimmt und die Differenz zwischen der größten und der kleinsten Zahl zurückgibt.

// Beispiele:
// diffMaxMin ([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82 // Kleinste Zahl ist -50, größte ist 32.
// diffMaxMin ([44, 32, 86, 19]) ➞ 67 // Kleinste Zahl ist 19, größte ist 86.
console.log( "aufgabe 4");
let array1 = [10, 4, 1, 4, -10, -50, 32, 21];
let diffMaxMin = function (maxMin){
  let localArray = [];
  for(let i = 0; i < maxMin.length; i++){
      if(max = Math.max.apply(Math,maxMin),
         min = Math.min.apply(Math,maxMin)){ 
    }
}
    return min+" ist das kleinste und "+max+ " ist der grüste wert."+(min - max);

}
console.log(diffMaxMin(array1));
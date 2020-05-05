console.log ("aufgabe 1");

let ist_grade=function(zahl){
    let grade = zahl%2 == 0;
    return "die zahl "+zahl+ " ist grade ist "+ grade
}
console.log(ist_grade(7));

console.log ("aufgabe 2");

function arrayZuString (arr){
    let result="";
    for (let i = 0; i <= arr.length; i++){
        result = result + "" + arr [i];
    }
    return result ;
}
let fruit = ["apfel","banane", "birne"];
console.log(arrayZuString(fruit));

console.log ("aufgabe 3");

let ist_posetiv=function(zahl1){
let klein = (zahl1 >= 0);
return "die Zahl "+zahl1+" ist Posetiv ist "+klein
}
console.log(ist_posetiv (-1));

console.log ("aufgabe 4");

let ausgabe = function (word){
    let buchstabe = word [1];
return "der 2 Buchstabe ist "+buchstabe
}
console.log (ausgabe ("huzfofg"));

console.log ("aufgabe 5");

let ausgabe1 = function (word1){
    let lenge = word1.length;
    let x = lenge-2;
    let letzte = word1 [x];
return "der 2 letzte Buchstabe ist "+letzte
}
console.log (ausgabe1 ("huzfofmg"));

console.log ("aufgabe 6");

let letzte_ausgabe = function (letzteWord){
    let wifiel = letzteWord.length;
    let y = wifiel -1;
    let zum_schluss = letzteWord [y];
    return "das letzte word ist "+zum_schluss;
}
console.log (letzte_ausgabe (["apple", "orange", "banana"]));
console.log ("aufgabe 7");

let zufalszahl = function ( ){

   let q = Math.random()*10 +20;
    return "Die zufals zahl ist "+q
}
console.log (zufalszahl(20, 30));

console.log ("aufgabe 8");

let kleinSreiben = function (ursprung){
    let kleinS = ursprung.toLowerCase();
    return "alles klein "+kleinS;
}
console.log (kleinSreiben("Hallo Weld"));

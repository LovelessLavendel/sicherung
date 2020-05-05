console.log ("1 Aufgabe");

let color = "rot"
switch(color){
    
    case "rot":
        console.log("Die farbe ist Rot.");
        break;
    case "blau":
        console.log("Die farbe ist Blau.");
        break;
    case "grün":
        console.log("Die farbe ist Grün.");
        break;
    case "gelb":
        console.log("Die farbe ist Gelb.");
        break;
    default:
        console.log("Disse farbe ist mir unbekant.");
}

console.log ("2 Aufgabe");

let Note = "1"
switch(Note){
    
    case "1":
        console.log("Das ist Sher gut.");
        break;
    case "2":
        console.log("Das sit Gut.");
        break;
    case "3":
        console.log("Das ist befidigend.");
        break;
    case "4":
        console.log("Das ist ausreichend.");
        break;
    case "5":
        console.log("Das ist mangelhaft.");
        break;
    case "6":
        console.log("Das ist ungenühent.");
        break;
    default:
        console.log("Disse Note Gibt es nicht.");
}
console.log ("3 Aufgabe");

let fruit = "Apfel"
switch(fruit){
    case "Banane":
        console.log("Das ist ein Banane");
        break;
    case "Apfel":
        console.log("Das ist ein Apfel");
        break;
        case "Orange":
        console.log("Das ist ein Orange");
        break;
    case "Erdbeere":
        console.log("Das ist ein Erdbeere");
        break;
    default:
        console.log("Diesse Fucht ist mir unbekant.");
}
console.log ("4 Aufgabe");

let weit = 28;

if ( weit<= 30){
    console.log("Noch ein langer Weg.");
} else if ( (weit >=30) && (weit <= 50)){
    console.log("Langsam dorthin gelangen.");
} else if ( (weit >=51) && (weit <= 80)){
    console.log("You can do it!");
} else if ( (weit >=81) && (weit <= 99)){
    console.log("Dies ist der letzte Push!");
} else if  (weit ==100) {
    console.log("Sie sind da. Gut gemacht!");
} else
    {console.log("Lade Fehler");}


console.log ("5 Aufgabe");


// switch ist für eingache (spezifische) abvoge gut geeignet
// if / else kan dagegen auchvergleiche und berechungen mit eingebunden werden.
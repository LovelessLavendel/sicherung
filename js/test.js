console.log("_________1_____________");
let zaehler1 = function() {
    for(let x = 0; x < 10; x++){
        console.log(x);
    }
}
zaehler1();                 //0123456789
console.log("__________2____________");
let zaehler2 = function() {
    for(let x = 0; x > 10; x++){
        console.log(x);
    }
}
zaehler2();                 // duch die function wird es abgebrochen.alsso nichts

console.log("__________3____________");
let array1=["appel","orege", "banane"];
let index = 2;
console.log(array1[index-1]); //orege

console.log("__________4____________");
let backwardLoop = () => {
    for (let z=0;           // wo starten wir 
             z>-10;         // wie lange soll dei schleife laufen
             z--){          // ob er vorwerts + oder rckwertz zehelt -
        return"loop is at index "+ z; // dauch das hir der string schon erfült wird zuegt er nicht weiter.
    }
}

// wird nur erste ausgegeben da erfült die schleife.
console.log(backwardLoop()); //loop is at index 0 danach wird er abgebrochen
console.log("___________5___________");
let aBetterBackwardLoop =() =>{
    let localString ="";     // hir duch wird er nicht abgebrochen und schreibt er in den String
    for (let y=0; y>-10;y--){
        localString+= " "+y;
    }
    return localString;
}
// hir wird dich den localStein alle ausgeschreben (erzwungen)
console.log(aBetterBackwardLoop());   // 0 -1 -2 -3 -4 -5 -6 -7 -8 -9


console.log("___________6___________");




console.log("______________________");
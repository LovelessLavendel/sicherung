const subjekt = ["sarah", "till", "tisch", "mensch"]; // Bitte eigene Wörter einfügen.
const praedikat = ["frisst", "malt", "lehrt", "macht"]; // Bitte eigene Wörter einfügen.
const objekt = ["stuhl", "groß", "klein", "menschen"]; // Bitte eigene Wörter einfügen.

getRandomElementFromArray = (array) => {
  //let randomNumber = []; // Hier muss eine Zufallszahl zwischen 0 und array.length eingefügt werden.

    let randomNumber1 = Math.floor(Math.random()*array.length);
    return array[randomNumber1];
  
}

console.log(getRandomElementFromArray(subjekt)+" "+(getRandomElementFromArray(praedikat))+" "+(getRandomElementFromArray(objekt))); // hier den zufallssatz einfügen.

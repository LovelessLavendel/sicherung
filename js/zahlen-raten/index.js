let stdin = process.openStdin();

let randomNumber = Math.floor(Math.random()*100); // 1. Das hier sollte eine Zufallszahl zwischen 0 und 100 sein.

console.log("guess my number!");

stdin.addListener("data", function (d) {
  // Wir konvertieren das input objekt erst in einen String.
  let textString = d.toString().trim();
  //2. Konvertiere den String in eine Zahl.
  let meineZahl = Number(textString);
    if(meineZahl>randomNumber){
      console.log( "zu Gross");
    }
    if(meineZahl< randomNumber){
      console.log( "zu klein");
    }
    if(meineZahl== randomNumber){
      console.log( " das ist Koreckt");
    }
    // if (isNaN(meineZahl));{
    //   console.log( "fehler");
    // }
    
  


  //3. Wenn die Zahl zu klein ist soll "höher" geloggt werden.
  //4. Wenn die Zahl zu groß ist soll "tiefer" geloggt werden.
  //5. Wenn die Zahl genau richtig ist soll "richtig" gelooggt werden.
  //BONUS: Wenn man statt einer Zahl einen String eingibt, soll ein Fehler angezeigt werden. 
});
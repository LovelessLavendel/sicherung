// 1. Welche Zahl ist größer?
// Schreiben Sie eine Funktion mit dem Namen "largerNum", die zwei 
//Argumente, beide Zahlen, akzeptiert. Es sollte die größere (höhere) Zahl zurückgeben.
console-console.log("--------------------------1-----------------------");
function largerNum(zahl1, zahl2){
    console.log((zahl1>zahl2) ?zahl1:zahl2);
    }

largerNum(2 ,3 );

// Beispiele:
// größerNum (2,3) -> 3

// größerNum (-3, 0) -> 0

// größerNum (200,1) -> 200

// 2. Word Übersetzer
// Schreiben Sie eine Funktion mit dem Namen helloWorld, die 1 Argument und
//  einen Sprachcode (z. B. "es", "de", "en") akzeptiert und für die angegebene
//   Sprache "Hello, World" für mindestens 3 Sprachen zurückgibt. Standardmäßig 
//   sollte Englisch zurückgegeben werden.
console-console.log("--------------------------2-----------------------");

 	
 
  function SprachenCheck(sprache) {
    let text = "Hello World!";
    if (sprache === "en") {
      text = "Hello World!";
    }  if (sprache === "de") {
      text = "Hallo Weld!";
    } else if (sprache === "") {
    text = "Hello Word!?";
    
  }
  return text;
}
console.log(SprachenCheck("en"));
console.log(SprachenCheck("de"));
console.log(SprachenCheck(""));
// Beispiele:
// helloWorld ("de") -> "Hallo Welt!"

// helloWorld ("de") -> "Hallo Welt!"

// helloWorld () -> "Hallo Welt!"

// 3. Der Notenzuweiser
// Schreiben Sie eine Funktion mit dem Namen assignGrade, die einen Zahlenwert
// annimmt und einen Wert für den Wert zurückgibt, entweder "A", "B", "C", "D" oder "F".
console-console.log("--------------------------3-----------------------");
function assignGrade(buchtabe) {
    let text = "";
    if (buchtabe >= 91  &&  buchtabe <= 100) {
        text = "A";
    } else if (buchtabe >= 81 && buchtabe <= 90) {
        text = "B";
    } else if (buchtabe >= 71 && buchtabe <= 80) {
        text = "C";
    } else if (buchtabe >= 51&& buchtabe <= 70) {
        text = "D";
    } else if (buchtabe >= 51 && buchtabe <= 60) {
        text = "E";
    } else if (buchtabe >= 0 && buchtabe <= 50) {
        text = "F";
  }
  return text;
}
console.log(assignGrade(100));
console.log(assignGrade(89));
console.log(assignGrade(76));
console.log(assignGrade(56));
console.log(assignGrade(20));
// Beispiele:
// assignGrade (100) -> "A"

// assignGrade (89) -> "B"

// assignGrade (76) -> "C"

// assignGrade (56) -> "D"

// assignGrade (20) -> "F"

// 4. Der Pluralizer
// Schreiben Sie eine Funktion namens pluralize, die ein Substantiv 
// und eine Zahl annimmt und den Namen und die Zahl in pluralisierter
//  Form zurückgibt.
console-console.log("--------------------------4-----------------------");
function pluralize (zahl, mehrzahl){
    if (zahl => 2 = mehrzahl[i].push+ "s"){

    }
}
console.log(pluralize(3, "cat"));
// Beispiele:
// pluralize (3, "cat") -> "3 cats"

// pluralize (5, "dog") -> "5 dogs"

// pluralize (2, "table") -> "2 tables"

// 5. FixStart
// Erstellen Sie eine Funktion mit dem Namen fixStart. Es sollte ein 
// einzelnes Argument, eine Zeichenfolge, annehmen und eine Version 
// zurückgeben, in der alle Vorkommen des ersten Zeichens mit Ausnahme 
// des ersten Zeichens durch '*' ersetzt wurden.
console-console.log("--------------------------5-----------------------");

// Beispiele:
// fixStart ("babble") -> "ba ** le"

// fixStart ("people") -> "peo * le"

// fixStart ("Unsinn") -> "no * se * se"

// 6. Nicht schlecht
// Erstellen Sie eine Funktion mit dem Namen notBad, die ein einzelnes 
// Argument, eine Zeichenfolge, akzeptiert. Es sollte das erste Auftreten 
// des Teilstrings "not" und "bad" finden. Wenn das 'schlechte' dem 'nicht'
//  folgt, sollte es den gesamten 'nicht' ... 'schlechten' Teilstring durch
//   'gut' ersetzen und das Ergebnis zurückgeben. Wenn es "nicht" und "schlecht"
//    in der richtigen Reihenfolge (oder überhaupt) nicht findet, geben Sie
//     einfach den ursprünglichen Satz zurück.
console-console.log("--------------------------6-----------------------");

// Beispiele:
// notBad ('Dieses Abendessen ist nicht so schlimm!') -> 'Dieses Abendessen ist gut!'

// notBad ('Dieser Film ist nicht so schlecht!') -> 'Dieser Film ist gut!'

// notBad ('Dieses Abendessen ist schlecht!') -> 'Dieses Abendessen ist schlecht!'
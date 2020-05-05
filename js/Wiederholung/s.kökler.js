// # Wiederholung

// Guck dir die Präsentation an: https://docs.google.com/presentation/d/1YTWJq8YpKqpGRClFoGCOi3FnwphtLT77JjE5aspYRI0/edit?usp=sharing
// 1. Erstelle eine neue .md Datei in der du alle in der Präsentation gestellten Fragen löst.
// Beispiel 
// ```
// Schritt 1. 
// Was ist meinArray1? "thequickbrownfox"
// was ist meinArray2? "the quick brown fox"
// ...
// ```

// 2. Erstelle eine Funktion namens "_capitalizeFirstLetter_". Diese Funktion nimmt einen String als Argument entgegen. 
// Die Funktion soll den ersten Buchstaben von jedem Wort zu einem Großbuchstaben kovertieren.
//  **Beispiel** _the quick brown fox_ → _The Quick Brown Fox_.

const capitalizeFirstLetter = (satz) =>{

    let stazArray = satz.split(" "); // von strin in array

    for (let i = 0; i<stazArray.length; i++){ // einzelne array

        let ersterBuchstabe = stazArray[i].charAt(0); // speichert jeweilig den 1ten buchtabe

        ersterBuchstabe = ersterBuchstabe.toUpperCase(); //jeweilig den 1ten buchtabe widt gross geschriben

        let restSatz = stazArray[i].slice(1); //speichert die kein buchtaben zusammen

        let result = ersterBuchstabe + restSatz; //fügt gros und klein buchstaben wider zusammen 

        stazArray[i] = result;  
    }
    let restSatz = stazArray.join(" "); // wandelt alles wicder in sein string
    return restSatz; 
    
}
console.log(capitalizeFirstLetter("the quick brown fox"));
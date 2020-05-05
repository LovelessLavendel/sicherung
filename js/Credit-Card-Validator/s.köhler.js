// ## Credit Card Validator

// You can work alone, or together with a classmate. If you are working in pairs, please still do individual pull requests but
// add a comment at the top of your javascript file indicating your partner. 

// You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple
// function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// 1. Number must be 16 digits, all of them must be numbers

// 2. You must have at least two different digits represented (all of the digits cannot be the same)

// 3. The final digit must be even

// 4. The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// ```9999777788880000```

// ```6666666666661666```

// The following credit card numbers are invalid:

// ```a92332119c011112``` invalid characters

// ```4444444444444444``` only one type of number

// ```1111111111111110``` sum less than 16

// ```6666666666666661``` odd final number

// If you need help, look at the cheat sheet.

// ### Bonus #1: 
// A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following 
// credit card numbers are now also valid:

// ```9999-7777-8888-0000```

// ```6666-6666-6666-1666```

// Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input 
//     credit card number is valid.)

// ### Bonus 2:
// If the credit card is invalid, make a console.log statement with an error message. For example: "sum less than 16" or 
// "only one type of number".

// ## Kreditkartenprüfer

// Sie können allein oder zusammen mit einem Klassenkameraden arbeiten. Wenn Sie zu zweit arbeiten, führen Sie bitte trotzdem einzelne Pull-Anfragen durch, fügen Sie jedoch oben in Ihrer Javascript-Datei einen Kommentar mit Angabe Ihres Partners hinzu. 

// Sie beginnen Ihr eigenes Kreditkartengeschäft. Sie müssen sich eine neue Methode zur Validierung von Kreditkarten mit einer einfachen Funktion namens validateCreditCard ausdenken, die wahr oder falsch zurückgibt.

// Hier sind die Regeln für eine gültige Nummer:

// 1. Die Nummer muss 16 Ziffern haben, alle müssen Zahlen sein

// 2. Es müssen mindestens zwei verschiedene Ziffern dargestellt werden (die Ziffern können nicht alle gleich sein)

// 3. Die Endziffer muss gerade sein

// 4. Die Summe aller Ziffern muss größer als 16 sein.

// Die folgenden Kreditkartennummern sind gültig:

// ```9999777788880000```

// ```6666666666661666```

// Die folgenden Kreditkartennummern sind ungültig:

// ````a92332119c011112``` ungültige Zeichen

// ````44444444444444444444```` nur eine Art von Nummer

// ```11111111111111111110``` Summe weniger als 16

// ```66666666666666666661``` ungerade Schlussnummer

// Wenn Sie Hilfe brauchen, schauen Sie auf den Spickzettel.

// Bonus ### Bonus #1: 
// Eine gültige Kreditkartennummer kann auch Bindestriche enthalten, um die Lesbarkeit der Kartennummer zu erleichtern. 
// Zum Beispiel das Folgende 
// Kreditkartennummern sind jetzt ebenfalls gültig:

// ```9999-7777-8888-0000```

// ```6666-6666-6666-1666```

// Aktualisieren Sie Ihr Programm, um solche Zahlen zuzulassen. (Tipp: Entfernen Sie die Striche aus der Eingabezeichenkette, 
//     bevor Sie prüfen, ob die Eingabe 
//     Kreditkartennummer gültig ist).

// ### Bonus 2:
// Wenn die Kreditkarte ungültig ist, machen Sie eine console.log-Anweisung mit einer Fehlermeldung. Zum Beispiel:
//  "Summe weniger als 16" oder 
// "nur eine Art von Nummer".


// Übersetzt mit www.DeepL.com/Translator (kostenlose Version)


const validateCreditCard = (nummer) => {

    let regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
    // let re16digit = /^\d{16}$/
    // if (document.myform.CreditCardNumber.value.search(re16digit) == -1)
    //     alert("bite geben sie eine 16 stelige zahl ein!");
    // return false;
}
    


9999777788880000
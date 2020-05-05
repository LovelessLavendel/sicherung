console.log (" aufgabe 1")

let Wahrsagerin =function(Anzahl_der_Kinder, Name_des_Partners, geografischer_Standort, Berufsbezeichnung){
    return "du wirst "+Anzahl_der_Kinder+" haben"+Name_des_Partners+"wird er heissen"+ "in"+geografischer_Standort+"wohnen" +Berufsbezeichnung+"bereich arbeiten."
}
console.log (Wahrsagerin (5 , " max "," berlin "," KFZ "))


console.log (" aufgabe 2")

let berechneHundealter =function(Alter_Ihres_Welpen){
    let hundeAlter = Alter_Ihres_Welpen *7
    return "Ihr Hund ist in Hundejahren "+ Alter_Ihres_Welpen + " Jahre alt und in Maenschen Jahren "+ hundeAlter +" Jahre alt!"
}
console.log (berechneHundealter (2))

console.log(" aufgabe 3")

let berechneAngebot=function(Alter, Menge_pro_Tag){
    let jahr = Menge_pro_Tag *365*Alter
    return "Sie brauchen "+jahr+" Bücher, um bis zum reifen Alter von "+Alter +" um jeden tag zu lesen"
}
console.log (berechneAngebot (90, 1))


console.log (" aufgabe 4")

    let calcCircumfrence=function(calcArea){
        let umfang = calcArea *2*(Math.PI)
        let fläche = calcArea *(Math.pow(Math.PI, 2))

    return "Der Umfang ist "+ umfang+ ".Die Fläche ist "+ fläche
  
}
console.log (calcCircumfrence (2))


console.log (" aufgabe 5")

let celsiusToFahrenheit= function(Celsius){
    let fahrenheit = Celsius* 1.8 +32
   
    return Celsius+"° C is "+fahrenheit +" ° F aus."
}

console.log (celsiusToFahrenheit (18))

let fahrenheitToCelsius= function(fahrenheit){
    let Celsius = (fahrenheit - 32 ) / 1.8 
   
    return fahrenheit+" °F aus ist "+ Celsius+"°C ."
}

console.log (fahrenheitToCelsius (200))
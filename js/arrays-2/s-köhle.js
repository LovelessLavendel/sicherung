console.log("Aufgabe1");
let euroCities = ["Paris", "London", "Valletta", "Prag", "Rom"];
console.log(euroCities);
console.log("Aufgabe2");
let stadt = euroCities[1];
console.log(stadt);


let berlin = euroCities.shift() 
    euroCities.unshift("berlin");
    // euroCities[1] = "Berlin";

console.log("Aufgabe3");
console.log(euroCities);

console.log("Aufgabe4");
let lenge = euroCities.length;
console.log(lenge);

console.log("Aufgabe5");
let lösch = euroCities.pop()
console.log(euroCities);

console.log("Aufgabe6 Bonus");
console.log(euroCities.slice(1, 2));

console.log("Aufgabe7");
let asianCities = [1, 2, 3, 4, 5];
console.log (asianCities);

console.log("Aufgabe8 Bonus");
let mixedCities = asianCities.slice(2,4);
console.log(mixedCities);

console.log("Aufgabe9 Bonus");
let worldCities = [...euroCities,...asianCities];
let worldCities2 = euroCities.concat(asianCities);
console.log(worldCities);
console.log(worldCities2);

console.log("Aufgabe10");
console.log(asianCities.reverse());

console.log("Aufgabe11 Bonus");
let world = worldCities[2] = "Toronto";
console.log (worldCities);

console.log("Aufgabe12 Bonus");
 worldCities.splice(1, 0,"Washington");
console.log(worldCities);

console.log("Aufgabe13 Bonus");
 strin = worldCities.join(", ");
 console.log (strin);
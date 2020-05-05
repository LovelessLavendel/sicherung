var stdin = process.openStdin();
let sum = 0;
let eigegebenezahl = [];


stdin.addListener("data", function(d) {
  let textString = d.toString().trim();
  sum += sum + Number(textString);
  eigegebenezahl.push(Number(textString));


  console.log(sum/eigegebenezahl.length);

});



// var average = function (val1, val2) {
//   return (val1 + val2) / 2;
// }
// document.write(average(5, 7));
// let stdin = process.openStdin();

// let randomNumber = Math.floor(Math.random()*100); // 1. Das hier sollte eine Zufallszahl zwischen 0 und 100 sein.

// console.log("guess my number!");

// stdin.addListener("data", function (d) {
//   // Wir konvertieren das input objekt erst in einen String.
//   let textString = d.toString().trim();
//   //2. Konvertiere den String in eine Zahl.
//   let meineZahl = Number(textString);
//     if(meineZahl>randomNumber){
//       console.log( "zu Gross");
//     }
//     if(meineZahl< randomNumber){
//       console.log( "zu klein");
//     }
//     if(meineZahl== randomNumber){
//       console.log( " das ist Koreckt");
//     }
//   console.log();
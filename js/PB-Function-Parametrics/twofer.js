// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
// Vervollständige die unten stehende Funktion, so dass sie "Zwei für mich und 
 // eine für dich" zurückgibt, wenn keine Argumente übergeben werden
const twofer = (who) => {
  
  if (who){
    return "Two for me and one for "+ who;
  }else{
    return "Two for me and one for you";
  }
  
}

console.log(twofer("niels")); // -> "Two for me and one for niels"
console.log(twofer()); // -> "Two for me and one for you"

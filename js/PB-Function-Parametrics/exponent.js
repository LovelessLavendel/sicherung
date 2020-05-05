// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

// Führen Sie die folgende Funktion aus, damit die Potenz einer Zahl auch dann berechnet wird, 
// wenn das Argument "exp" nicht übergeben wird. Der Standardwert "exp" sollte auf 2 gesetzt werden.
// Beispiel: Wenn Sie die Funktion mit 2 und 4 aufrufen, wird 8 (2 hoch 4) zurückgegeben.
//  Wenn Sie sie mit nur 2 aufrufen, sollte 4 (2 hoch 2) zurückgegeben werden.

const exponent = (...args) => {
  let result = 0;

    if (args.length >= 2){
      result = Math.pow(args[0], args[1]);
    } else {
      result= Math.pow(args[0], 2);
  }

  return result;
}

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

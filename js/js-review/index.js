console.log("---Exercise 0---");
//0. Write your own filterArray() function that works similar as the array filter function
// The function gets an array and a filter function as parameter
// it returns a new (which means filtered) array

const filterArray = (oldArr, func) => {
  let filteredArr = [];

  for (let i = 0; i < oldArr.length; i++) {
    if (func(oldArr[i])) {
      filteredArr.push(oldArr[i]);
    }
  }
  return filteredArr;
}

// Filter function for testing your filterArray Function (filters strings with a minimum length of 6)
const testFilterFunction = (element) => {
  return element.length >= 6;
}
const resultArr = filterArray(["short", "long enough", "I'm also a big guy", "doh"], testFilterFunction);

console.log(resultArr);
// expected output: ["long enough", "I'm also a big guy"]


console.log("---Exercise 1---");
// 1. Finish the function, so it returns an array only containg even numbers from the input.
const onlyEven = (numberArr) => {
  // for(let i=0; i<numbers.length; i++){
  //   return(numbers % 2) !=0;

  let testFunction = el => {
    if (el % 2 === 0) {
      return true;

    } else {
      return false;

    }
  };
  let newArr = numberArr.filter(testFunction);
  return newArr;
}

console.log(onlyEven([1, 2, 3, 4])); // output: [2, 4]
console.log(onlyEven([3, 100, -4, 12])); // output: [100, -4, 12]

console.log("---Exercise 2---");
// 2. Finish the function, so it reverses an array.
// don't use the Array.prototype.reverse() function ;)
const reverseArray = (array) => {
  let mewArray =[];
  for(let i = array.length -1; i>=0; i--){
    mewArray.push(array[i]);
  }
  return mewArray;
};
const reverseArrayEasyWay =(array => {
  return array.reverse();
})
console.log(reverseArray(["foo", "baz", "bar"])); // output: ["bar", "baz", "foo"]

console.log("---Exercise 3---");
// 3. Use the function from question 2 (without rewriting it) within the reverseString function to reverse a String. 
//(Tip: You might have to convert the string)
const reverseString = (string) => {
return reverseArray(string).join("");

 };
console.log(reverseString("foo")); // output: "oof"
console.log(reverseString("hello")); // output: "olleh"

/* 4. Answer the two questions in the comment. 
let t = true;
let f = false;
let result = "1";
if(t && f){
    result = "2"
}
console.log(result);
1. QUESTION: what number is the result?
Your answer: 

if(t||f){
    result = 3;
}
console.log(result);
2. QUESTION: what number is the result here?
Your answer: 
*/

console.log("---Exercise 5---");
//  5. Finish the function so it filters out elements that are not numbers from an array.
const numberFilter = (array) => { };
console.log(numberFilter(["a", 22, "hello", 1, true])); // result:  [22, 1]
console.log(numberFilter([undefined, -2000, false, 30, "200", 15])); // result: [-2000, 30, 15]

console.log("---Exercise 6---");
// 6. Finish the function, so it returns the last element of an array.
const lastElement = (array) => { };
console.log(lastElement(["a", 22, "hello", 1, true])); // result: true
console.log(lastElement([undefined, -2000, false, 30, "200", 15])); // result: 15

console.log("---Exercise 7---");
// 7. Finish the function, so it deletes all "-" characters from a string.
// Tip: If google wants you to use regular expressions, use this one: /-+/
// Tip and preferred solution: You can also solve this with a loop (which means without regular expressions).
const cleanString = (string) => { };
console.log(cleanString("1-2-3")); // result: 123
console.log(cleanString("hello-world")); // result: helloworld

console.log("---Exercise 8---");
// 8. Finish the function, so it sums all the prices in the array.
// Tip: If you are using reduce(), don't forget to set an initial value,
const products = [
  { name: "drums", price: 310 },
  { name: "piano", price: 200 },
  { name: "guitar", price: 450 },
];
const priceAdder = (productArray) => { };
console.log(priceAdder(products)); // result: 960

console.log("---Exercise 9---");
//9. Finish the function so it sums all the numbers in a nested array.
// Tip: For loops are probably simpler than reduce().
const myNumberArray = [[2, 3], [1], [100, 200, 300, -50]];
const summer = (numberArray) => { };
console.log(summer(myNumberArray)); // result: 556

console.log("---Exercise 10---");
/*Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “fizz” instead of the number and 
for the multiples of five print “buzz”. 
For numbers which are multiples of both three and five print “fizzbuzz”. */
const fizzBuzz = () => { };
fizzBuzz();
/* result:
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
...
*/


console.log("---Exercise 11---");
//11. Given this array:
const songs = [
  { id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204 },
  { id: 2, name: "Oblivion", artist: "Mastodon", duration: 306 },
  { id: 3, name: "Flying Whales", artist: "Gojira", duration: 444 },
  { id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246 }
];

//a) Extract all song names into an array by using map

let allSongNames = songs.map(); // finish the function
console.log(allSongNames);
//expected output: ["Curl of the Burl","Oblivion","Flying Whales","L'Enfant Sauvage"];


//b) same as a) but include only songs that are shorter than 300 (duration)
// you have to use filter() as well
let allShortSongNames = songs.filter({
  //... your code
}).map({
  //... your code
});

console.log(allSongNames);
//expected output: ["Curl of the Burl","L'Enfant Sauvage"];

console.log("---BONUS: Exercise 12---");
//12. find the average value of an array using the reduce function
//hint: 
const euros = [29.76, 41.85, 46.5];

const eurosAverage = euros.reduce((total, amount, index, array) => {

  //your code here....
});

console.log(eurosAverage); //expected output: 39.37

// More BONUS-Exercises: https://gist.github.com/TessMyers/a252520dd9a8fe68f8e5
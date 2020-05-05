// Finish these Functions

console.log("---1---")
/* This function should give us every second entry in an array.
for example: ["bees", "wasps", "spiders", "ants"] returns "wasps ants"
*/

const everySecondEntry = (arr) => {
  let result = "";
  for(let i = 0; i < arr.length; i++){
    if (i%2 ===1) {  
      result = result + " " + arr[i];
    }
  }
  return result; 
}

const insects = ["bees", "wasps", "spiders", "ants"];

console.log(everySecondEntry(insects));


console.log("---2---");
/* This function should check if our array contains a specific element.
for example: ["milk", "eggs", "cheese", "butter"], "cheese" returns true
["milk", "eggs", "cheese", "butter"], "ham" returns false 
*/

const isElementInArray = (arr, element) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === element) { 
      return  true; 
    }
  }
  return false; 
}

const dairyProducts =  ["milk", "eggs", "cheese", "butter"];
console.log(isElementInArray(dairyProducts, "cheese")); //should return true
console.log(isElementInArray(dairyProducts, "ham")); //should return false



console.log("---3---");

/* This function should find the index of an element. */

const findIndex = (arr, element) => {
  for(let i = 0; i < arr.length; i++){ 
    if(arr[i]===element){ 
      return i;
    }
  }
}

const kitchenItems = ["pan", "plate", "spoon", "mixer"];
console.log(findIndex(kitchenItems, "plate"));  //should return 1
console.log(findIndex(kitchenItems, "mixer"));  //should return 3


console.log("---4---");

/* This function should reverse an array. 
Example: [1, 2, 3, 4] returns [4, 3, 2, 1]*/


const reverseArray = (arr) => {
  let result = [];
  for(let i = arr.length-1; i >= 0; i--){ 
    result.push(arr[i]);
  }
  return result;
}
let numbers = [1, 2, 3, 4];
console.log(reverseArray(numbers)); //should return [4, 3, 2, 1]


console.log("---5---");

/* This function should multiply all elements of the array by 3
Example: [2, 3, 5] returns [6, 9, 15] */

const multiplyByThree = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i]*3); 
  }
  return result; 
}

let numbers2 = [2, 3, 5];
console.log(multiplyByThree(numbers2)); //should return [6, 9, 15]


/* Extra:
  1. Write a function that gives us the next 20 leap years. (Schaltjahre)
  2. Write a function that gives us the largest number in an array. Example: [2, 4, 10, -1] returns 10
  3. Write a function that gives us all numbers in an array added together. Example: [1, 2, 3] returns 6
*/

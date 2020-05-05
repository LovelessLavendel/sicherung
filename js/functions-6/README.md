## Let's practice some more
Tip: Use Google.

### 1. Number to Month Name
Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

Examples:

monthName(3) ➞ "March"

monthName(12) ➞ "December"

monthName(6) ➞ "June"

### 2. Unlucky 13
Given a sorted array of numbers, remove any numbers that are divisible by 13. 
Return the amended array.

Examples:

unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.

### 3. Filter out Strings from an Array
Create a function which filters out strings from an array and returns a new array containing only integers.

Examples:

filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

filterList([1, "a", 2, "b", 3, "c"]) ➞ [1, 2, 3]

filterList([0, -32, "&@A", 64, "99", -128]) ➞ [0, -32, 64, -128]

### 4. Difference between Max and Min Numbers in an Array
Create a function that takes an array and returns the difference between the biggest and smallest numbers.

Examples:

diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.

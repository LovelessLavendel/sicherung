## Mixed Exercise

### 1. Which number is bigger
Write a function named greaterNum that takes 2 arguments, both numbers.
It should return the bigger (higher) number.

#### Examples:
greaterNum(2,3) -> 3

greaterNum(-3, 0) -> 0

greaterNum(200,1) -> 200

### 2. Word Translator

Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns  "Hello, World" for the given language, for at least 3 languages. It should default to returning English.

#### Examples:
helloWorld("en") -> "Hello World!"

helloWorld("de") -> "Hallo Welt!"

helloWorld() -> "Hello World!"

### 3. The Grade Assigner
Write a function named assignGrade that takes a number score and returns a grade for the score, either "A", "B", "C", "D", or "F".

#### Examples:
assignGrade(100) -> "A"

assignGrade(89) -> "B"

assignGrade(76) -> "C"

assignGrade(56) -> "D"

assignGrade(20) -> "F"

### 4. The Pluralizer
Write a function named pluralize that takes a noun and a number and returns the name and number in pluralized form.

#### Examples:
pluralize(3, "cat") -> "3 cats"

pluralize(5, "dog") -> "5 dogs"

pluralize(2, "table") -> "2 tables"


### 5. FixStart
Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself.

#### Examples:
fixStart("babble") -> "ba\**le"

fixStart("people") -> "peo*le"

fixStart("nonsense") -> "no\*se*se"


### 6. Not Bad
Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.


#### Examples:
notBad('This dinner is not that bad!') -> 'This dinner is good!'

notBad('This movie is not so bad!') -> 'This movie is good!'

notBad('This dinner is bad!') -> 'This dinner is bad!'

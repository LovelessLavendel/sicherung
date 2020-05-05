## Credit Card Validator

You can work alone, or together with a classmate. If you are working in pairs, please still do individual pull requests but add a comment at the top of your javascript file indicating your partner. 

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

1. Number must be 16 digits, all of them must be numbers

2. You must have at least two different digits represented (all of the digits cannot be the same)

3. The final digit must be even

4. The sum of all the digits must be greater than 16

The following credit card numbers are valid:

```9999777788880000```

```6666666666661666```

The following credit card numbers are invalid:

```a92332119c011112``` invalid characters

```4444444444444444``` only one type of number

```1111111111111110``` sum less than 16

```6666666666666661``` odd final number

If you need help, look at the cheat sheet.

### Bonus #1: 
A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

```9999-7777-8888-0000```

```6666-6666-6666-1666```

Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

### Bonus 2:
If the credit card is invalid, make a console.log statement with an error message. For example: "sum less than 16" or "only one type of number".

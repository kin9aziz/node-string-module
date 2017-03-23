# node-string-module

A simple node module that provides methods for string manipulations.

## HOW TO INSTALL

npm install node-string-module --save

## HOW TO USE

var string = require('node-string-module');

## METHODS

# FirstLetterUpper
The function converts first letters of every word in a sentence to uppercase

```javascript
var result = string.FirstLetterUpper('this is a module written by me');
// Returns 'This Is A Module Written By Me'

# RepeatString
The function repeats the string the number of times specified

```javascript
var result = string.RepeatString('word', 3);
// Returns 'wordwordword'

# StringEnding
This function returns true if the string ends with a particular string provided

```javascript
var result = string.StringEnding('module', 'e');
// Returns true

# ReverseString
This function reverses a string

```javascript
var result = result.ReverseString('hello');
// Returns 'olleh'

# Longest
This function returns the longest string and its length in a sentence

```javascript
var result = string.Longest('Today is a very wonderful day');
// Returns ['wonderful', 9]





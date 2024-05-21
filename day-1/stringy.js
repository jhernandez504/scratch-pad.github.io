// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/** 
  I: Function takes in string
  O: Function counts the length of string and returns it using .length
  C:
  E:
*/
function length(string) {
    // YOUR CODE BELOW HERE //
    //counts and returns string length
    return string.length;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/** 
  I: Function takes in string
  O: Function converts string to lowerCase and returns
  C:
  E:
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //returns string converted to lowerCase
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/** 
  I: Function takes in string
  O: Function converts string to upperCase and returns
  C:
  E:
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //Capitalizes string and returns it
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/** 
  I: Function takes in string
  O: Function replaces space with dashes and returns it
  C:
  E:
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //returns lowercased string with dash replacing all spaces
    return string.toLowerCase().replace(/ /g, "-");


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/** 
  I: Function takes in string and a single char 
  O: Function compares char to first index of string and returns true if theyre equal
  C: Compare string first index and char loosely
  E:
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
  //declare and initialize var to hold input string and char
  var word = string.toLowerCase();
  var letter = char.toLowerCase();
  //if else statement loosely comparing first character of string and char
  if (word[0] == letter) {
    return true;
  } 
  //returns false if true condition is not met
  return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/** 
  I: Function takes in string and a single char 
  O: Function compares char to last index of string and returns true if theyre equal
  C: N/A
  E: N/A
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
  //declaration/initialization of variables to hold string and char in lower case
  var word = string.toLowerCase();
  var letter = char.toLowerCase();
  //if statement to return true if last character in string is equal to char
  if (word[string.length - 1] == letter) {
    return true;
  }
  //returns false by default if no characters are equal
  return false;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/** 
  I: Two seperate strings
  O: A joined string from the two input strings
  C: N/A
  E: N/A
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  //return strings concatenated by + 
  return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/** 
  I: Any number of strings
  O: One joined string combining all strings from argument array
  C: N/A
  E: N/A
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //returns joined strings from args array
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/** 
  I: Two strings are inputted.
  O: The longest string is returned.
  C: N/A
  E: N/A
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  //if else statement comparing string1 and string 2
  if (stringOne.length > stringTwo.length) {
    //return stringOne if longest length
    return stringOne;
  } else if (stringTwo.length > stringOne.length){
      //returns stringTwo if longest
      return stringTwo
  } else{
  }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/** 
  I: Two strings are being compared by alphabetical order
  O: An integer is returned depending on the comparison between two strings.
  C: N/A
  E: N/A
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //compare string1 to string 2
    return stringTwo.localeCompare(stringOne);



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/** 
  I: Two Strings are inputted 
  O: Integer is returned after comparison of alphabetical order of both strings
  C: N/A
  E: N/A
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  //compares both strings and returns integer -1, 0 or 1
  return stringOne.localeCompare(stringTwo);



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
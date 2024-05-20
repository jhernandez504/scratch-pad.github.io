// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/** 
 * I: Function takes in string
 * O: returns string in reversed order
 * C:
 * E:
 */
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //create empty array to collect string characters
    var reversedString = [];
    //iterate thru input string with for loop
    for (var i = input.length; i >= 0; i--){
    //push character at index to front of array
      reversedString.push(input[i]);
    }
    //return joined reversed string
    return reversedString;
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
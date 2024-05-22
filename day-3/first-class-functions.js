// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/**  
 * I: An input base is given which is either a string or number.
 * O: Returns true or false by testing if the given value is greater than base.
 * C:
 * E:
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returns test function that inputs value and tests if the value is greater than base returning true.
   return function(value){
    //if true, it returns
        return value > base;
   };

  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
/**  
 * I: An input base is given which is either a string or number.
 * O: Returns true or false by testing if the given value is less than base.
 * C:
 * E:
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return function to test value and returns if true
    return function(value) {
        return value < base;
    };
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/**  
 * I: A single character is given.
 * O: Returns true of false after testing inside a function whether string starts with input character.
 * C: N/A
 * E: N/A
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //converts single letter to lowercase
    var lowerCasedLetter = startsWith.toLowerCase();
    return function(string){
        return string.toLowerCase().startsWith(lowerCasedLetter);
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
/**  
 * I: A single character is given.
 * O: Returns true of false after testing inside a function whether string ends with input character.
 * C: N/A
 * E: N/A
*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    var lowerCasedLetter = endsWith.toLowerCase();
    return function(string){
        return string.toLowerCase().endsWith(lowerCasedLetter);
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/**  
 * I: An array of strings and function are given as parameters
 * O: Must return an array of modified strings
 * C: N/A
 * E: N/A
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create empty array of strings
    var modifiedStrings = [];
    //for loop to iterate over strings in the array
    for (let i = 0; i < strings.length; i++){
        //modifies string at each index
        let modifiedString = modify(strings[i]);
        //push modified string to new array
        modifiedStrings.push(modifiedString);
    }
  return modifiedStrings;
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/**  
 * I: An array of strings and function are given as parameters
 * O: Must return true or false if all strings pass test
 * C: N/A
 * E: N/A
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //for loop to iterate over array of strings
    for (let i = 0; i < strings.length; i++) {
        if(!test(strings[i])) {
            return false;
        }
       
        }
        return true;
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
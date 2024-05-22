// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/**
 * I: Input value is given.
 * O: True or false after testing if input is an array.
 * C: N/A
 * E: N/A
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
/**
 * I: An input value is given.
 * O: True if input value is an object..
 * C: Must not be an array, null or instance of date().
 * E: N/A
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // nested if statement testing value to be object excluding null, array and instanceof date
    if(typeof value === 'object' && value !== null) {
        if (!Array.isArray(value) && !(value instanceof Date)){
            return true;
        }
    }
    return false;
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/**
 * I: An input value is given.
 * O: True if input value is an object or an array
 * C: Must not be null or instance of date().
 * E: N/A
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if conditional statement to test if value is both obj and arr only
    if (Array.isArray(value) && typeof value === 'object'){
        return true;
    }
    //returns true if the if condition isnt fulfilled
    return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
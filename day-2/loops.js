// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/** 
  I: An array of values is given
  O: Values of the array should be logged to console.
  C: N/A
  E: N/A
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //for loop to iterate thru array
  for (var i = 0; i < array.length; i++) {
    //logs to console the index of i on each iteration
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/** 
  I: An array if values is given
  O: Values are printed in reverse order from the array
  C: N/A
  E: N/A
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //for loop to iterate over the array
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/** 
  I: An object containing keys is given.
  O: An array of object keys is returned
  C: N/A
  E: N/A
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //return array of object keys using object.key()
  return Object.keys(object);

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/** 
  I: An Object is given.
  O: Object keys is logged to console
  C: N/A
  E: N/A
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // for in loop to iterate of object keys
  for (var key in object) {
    //if statement to check if obj has key property
    if (object.hasOwnProperty(key)){
      console.log(key);
    }
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/** 
  I: An object is given
  O: Return an array of object's values.
  C: N/A
  E: N/A
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 *//** 
  I: An object is given.
  O: Object values are each logged to console.
  C: N/A
  E: N/A
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //for in loop over object
  for (let key in object) {
    //if statement to check if obj has key
    if (object.hasOwnProperty(key)) {
      //logs each value of that obj key
      console.log(object[key]);
    }
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
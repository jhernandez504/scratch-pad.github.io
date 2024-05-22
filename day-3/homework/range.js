// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
/**  
 * I: Two integers are given as input.
 * O: Must return an array of numbers ranging between both numbers 
 * C: Array of numbers must be ordered depending on first input in relation to second
 * E: N/A
*/
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //create empty array to hold number range
    var numberRange = [];
    //create variables to determine start and end based on input integers
    var start = Math.min(start, end);
    var end = Math.max(start, end);

    //if statement for if start number is greater than end number
    if (start < end){
        //for loop to iterate through range
        for (let i = start; i <= end; i++) {
            numberRange.push(i);
        }
    }   else {
            //for loop to iterate downwards
            for (let i = end; i >= start; i--){
                numberRange.push(i);
            }           
    }


    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
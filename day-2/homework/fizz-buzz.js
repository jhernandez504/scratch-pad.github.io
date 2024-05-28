// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //for loop to iterate thru 1-100 and print
    for (let i = 1; i <= 100; i++) {
        //if statement if divisable by 3 & 5 prints fizzbuzz
        if (i % 5 === 0 && i % 3 === 0){
            console.log('FizzBuzz');
            //else if statement that prints fizz if number is divisable by 3 only
        } else if (i % 3 === 0){
            console.log('Fizz');
            //else if statement that prints buzz if number is divisable by 5 only
        }   else if ( i % 5 === 0){
                console.log('Buzz');
                //default prints number if previous checks pass thru
        }   else {
                console.log(i);
        }
    }
             
}
fizzBuzz();

    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
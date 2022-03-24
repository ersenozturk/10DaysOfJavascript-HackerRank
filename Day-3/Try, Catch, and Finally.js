// https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''));  
    } catch (error) {
        console.log(error.message + '\n' + s);

    }
    
}
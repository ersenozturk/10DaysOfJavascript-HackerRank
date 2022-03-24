// https://www.hackerrank.com/challenges/js10-throw/problem?isFullScreen=true

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a>0) {
        return 'YES'
    } else {
        throw (a < 0 ? new Error('Negative Error') : new Error('Zero Error'))
    }
}
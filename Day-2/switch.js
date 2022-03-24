// https://www.hackerrank.com/challenges/js10-switch/problem?isFullScreen=true

function getLetter(s) {
    let letter;
    // Write your code here
    let char = s.charAt(0);
    switch(char){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "m":
        case "h":
        case "j":
        case "k":
        case "l":
            letter = "C";
            break;
        default:
            letter = "D";
    }
    return letter;
}

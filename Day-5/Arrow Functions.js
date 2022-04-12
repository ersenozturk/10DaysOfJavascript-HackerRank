// https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true

function modifyArray(nums) {
    let something = function(n){
        let a = (n%2==0) ? n*2: n*3;
        return a;
    }
    let newArray = nums.map(something);
    return newArray
}
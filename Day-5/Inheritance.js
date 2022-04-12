// https://www.hackerrank.com/challenges/js10-inheritance/problem?isFullScreen=true

Rectangle.prototype.area = function(){
    return this.w * this.h 
}

class Square extends Rectangle {
    constructor(s){
        super(s,s);
    }
}
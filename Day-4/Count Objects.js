// https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true


function getCount(objects) {
    return objects.filter(item =>item.x===item.y).length;
    }
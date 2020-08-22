"use strict";
function add(a, b) {
    if (a === 'number' && b === 'number') {
        return +a + +b;
    }
    return a.toString() + b.toString();
}
var result = add(1, 1);
var resultB = add('1', '1');
resultB.split(' ');

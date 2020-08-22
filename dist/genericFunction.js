"use strict";
function countElements(elements) {
    var description = 'No Element';
    if (elements.length === 1) {
        description = 'got 1 element.';
    }
    else if (elements.length > 1) {
        description = 'got elements.';
    }
    return [elements, description];
}
console.log(countElements(['good']));
console.log(countElements([]));
console.log(countElements(['good', 'good']));

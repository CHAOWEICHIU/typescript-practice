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
var _a = countElements('goodjob'), els = _a[0], des = _a[1];

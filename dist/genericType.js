"use strict";
function merge(a, b) {
    return Object.assign(a, b);
}
var objA = merge({ good: "job" }, { how: "are you" });
objA.good;
objA.how;
var objB = merge({ name: "ok" }, { amount: 3 });
objB.amount;
objB.name;

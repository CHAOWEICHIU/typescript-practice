"use strict";
function printSpeed(item) {
    var speed;
    switch (item.type) {
        case "car": {
            speed = item.moveSpeed;
            break;
        }
        case "person": {
            speed = item.runSpeed;
            break;
        }
        default:
            {
                speed = 0;
            }
            console.log(speed);
    }
}
var aCar = {
    name: "ok",
    moveSpeed: 33,
    type: "car",
};
printSpeed(aCar);

"use strict";
function printSpeed(item) {
    var speed;
    switch (item.type) {
        case "car": {
            speed = item.moveSpeed;
            break;
        }
        case "wow": {
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
printSpeed({ type: "car", moveSpeed: 10, name: "ok" });
printSpeed({
    type: "wow",
    runSpeed: 30,
});

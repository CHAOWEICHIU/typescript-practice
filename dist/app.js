"use strict";
var _a;
var Car = (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var Truck = (function () {
    function Truck(name) {
        this.name = name;
    }
    Truck.prototype.load = function () { };
    return Truck;
}());
var carA = new Car("Toyota");
var carB = new Car("Ford");
function printCar(car) {
    if (car instanceof Truck) {
        car.load();
    }
}
printCar(carA);
var person = {
    name: "person",
    job: { title: "CEO" },
};
console.log((_a = person === null || person === void 0 ? void 0 : person.job) === null || _a === void 0 ? void 0 : _a.title);

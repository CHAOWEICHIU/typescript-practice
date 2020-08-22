"use strict";
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
    Truck.prototype.load = function () {
    };
    return Truck;
}());
var carA = new Car('Toyota');
var carB = new Car('Ford');
function printCar(car) {
    if (car instanceof Truck) {
        car.load();
    }
}
printCar(carA);

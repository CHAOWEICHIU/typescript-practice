"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DataStorage = (function () {
    function DataStorage() {
        this.items = [];
    }
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.items);
    };
    DataStorage.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.items.indexOf(item) === -1) {
            return;
        }
        this.items.splice(this.items.indexOf(item), 1);
    };
    return DataStorage;
}());
var textDataStorage = new DataStorage();
textDataStorage.addItem("ok");
textDataStorage.addItem("good");
textDataStorage.getItems();
var numberAndTextDataStorage = new DataStorage();
numberAndTextDataStorage.addItem("ok");
numberAndTextDataStorage.addItem("good");
numberAndTextDataStorage.addItem(4);
console.log(numberAndTextDataStorage.getItems());
var objectDataStorage = new DataStorage();
var referenceA = { good: "job" };
var referenceB = { hello: "job" };
objectDataStorage.addItem(referenceA);
objectDataStorage.addItem(referenceB);
objectDataStorage.removeItem(referenceA);
console.log(objectDataStorage.getItems());

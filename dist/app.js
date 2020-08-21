"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = (function () {
    function Item(name) {
        this.name = name;
    }
    Item.prototype.getName = function () {
        console.log(this.name);
    };
    return Item;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(age, name) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Person.prototype.getAge = function () {
        console.log(this.age);
    };
    return Person;
}(Item));
var wayne = new Person(10, 'wayne');
wayne.getAge();
wayne.getName();

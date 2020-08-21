"use strict";
var Item = (function () {
    function Item(name) {
        this.name = name;
    }
    Item.prototype.getName = function () {
        console.log(this.name);
    };
    return Item;
}());
var beef = new Item("ok");
console.log(beef);

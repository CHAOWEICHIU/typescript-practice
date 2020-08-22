"use strict";
function printPerson(person) {
    var name = person.name;
    console.log(name);
    if ('privileges' in person) {
        console.log(person.privileges);
    }
    if ('createdAt' in person) {
        console.log(person.createdAt);
    }
}

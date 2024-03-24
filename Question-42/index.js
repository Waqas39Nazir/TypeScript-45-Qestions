"use strict";
/***
 * Q42: Great Magicians: Start with a copy of your program from Exercise 39.
 *  Write a function called make_great() that modifies the array of magicians
 *  by adding the phrase the Great to each magician’s name. Call show_magicians()
 *  to see that the list has actually been modified.
 */
let magicianNames = ["Waqas", "Saad", "Ahsan", "Hamza"];
const show_magicians = (names) => {
    names.map((name) => {
        console.log(name);
    });
};
const make_great = (magicians) => {
    const array = magicians.map((name) => {
        return "Great " + name;
    });
    magicianNames = array;
};
make_great(magicianNames);
show_magicians(magicianNames);

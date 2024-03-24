"use strict";
/****
 * Magicians: Make a array of magician’s names. Pass the array
 *  to a function called show_magicians(), which prints the name
 *  of each magician in the array.
 */
const magicianNames = ["Waqas", "Saad", "Ahsan", "Hamza"];
const show_magicians = (names) => {
    names.map((name) => {
        console.log("Name:", name);
    });
};
show_magicians(magicianNames);

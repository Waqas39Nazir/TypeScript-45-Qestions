"use strict";
/****
 * Sandwiches: Write a function that accepts a array of items a
 *  person wants on a sandwich. The function should have one parameter
 *  that collects as many items as the function call provides, and it
 *  should print a summary of the sandwich that is being ordered.
 * Call the function three times, using a different number of arguments each time.
 */
const orderedSandwich = (...items) => {
    const message = `The ordered Sandwich has items${items.map((item) => {
        return ` ${item}`;
    })}.`;
    console.log(message);
};
orderedSandwich("Ham", "Cheese", "Tomato");
orderedSandwich("Swiss Cheese", "Mustard");
orderedSandwich("Swiss Cheese", "Mustard", "Jam", "Jelly", "Ham");

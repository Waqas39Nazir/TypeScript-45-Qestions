"use strict";
/****
 * Cars: Write a function that stores information about a car in a Object.
 *  The function should always receive a manufacturer and a model name.
 *  It should then accept an arbitrary number of keyword arguments.
 * Call the function with the required information and two other name-value pairs,
 *  such as a color or an optional feature. Print the Object that’s returned
 * to make sure all the information was stored correctly.
 */
const make_car = (manufacturer, modelName, color, price) => {
    return {
        manufacturer,
        modelName,
        color,
        price,
    };
};
const carOne = make_car("VicyTech", "GH123TY", "Green");
console.log("Car One:", carOne);
const carTwo = make_car("Tesla", "GHGYTUY677687HGHJG", "Orange", "USD 12M");
console.log("Car Two:", carTwo);

"use strict";
/****
 * Seeing the World: Think of at least five places in the world you’d like to visit.
 *  Store the locations in a array. Make sure the array is not in alphabetical order.
 * Print your array in its original order.
 *  Print your array in alphabetical order without modifying the actual list.
 *  Show that your array is still in its original order by printing it.
 *  Print your array in reverse alphabetical order without changing the order of the original list.
 *  Show that your array is still in its original order by printing it again.
 *  Reverse the order of your list. Print the array to show that its order has changed.
 *  Reverse the order of your list again. Print the list to show it’s back to its original order.
 *  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 *  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */
const places = ["Baghdad", "Makkah", "Madina", "Multan", "Karachi"];
console.log("The places i would like to visit are:", places);
const sortedArray = [...places];
sortedArray.sort();
console.log("Sorted Array:", sortedArray);
console.log("Original Array:", places);
places.reverse();
console.log("Reversed Array:", places);
places.reverse();
console.log("Anti Reverse to get back original Array:", places);
places.sort();
console.log("Array in alphabatical order:", places);
places.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    else if (a < b) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log("Array in reverse alphabetical order:", places);

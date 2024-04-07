"use strict";
/*****
 * More Guests: You just found a bigger dinner table, so now more space is available.
 *  Think of three more guests to invite to dinner.
 *  Start with your program from Exercise 15. Add a print statement to the end of your program
 *  informing people that you found a bigger dinner table.
 * Add one new guest to the beginning of your array.
 *  Add one new guest to the middle of your array.
 *  Use append() to add one new guest to the end of your list.
 *  Print a new set of invitation messages, one for each person in your list.
 */
const guests = ["Waqas", "Waqar", "Hassan", "Ahsan"];
console.log("I have found a bigger dinner table\n");
guests.unshift("Dua Fatima");
guests.splice(3, 0, "Gulshan");
guests.push("Kishwar Parveen");
guests.forEach((guest) => {
    console.log(`Hi ${guest}, please make yourself avaible for a dinner at my home at 18:00`);
});

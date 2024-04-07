"use strict";
/***
 * Changing Guest List: You just heard that one of your guests can’t make the dinner,
 *  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 *  Start with your program from Exercise 14. Add a print statement at the end of your program stating
 *  the name of the guest who can’t make it.
 *  Modify your list, replacing the name of the guest who can’t make it with the name of the new person
 * you are inviting.
 *  Print a second set of invitation messages, one for each person who is still in your list.
 */
let guests = ["Waqas", "Waqar", "Hassan", "Ahsan"];
guests.forEach((guest) => {
    if (guest === "Hassan") {
        console.log(`Hi Mr.${guest}, Its okay if you can't make yourself avaiable for a dinner\n`);
    }
});
guests.splice(2, 1, "Talha Ahmed");
guests.forEach((guest) => {
    console.log(`Hi Mr.${guest}, Please come to my home tomorrow for a dinner at 18:00`);
});

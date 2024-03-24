"use strict";
/****
 * Guest List: If you could invite anyone, living or deceased, to dinner,
 *  who would you invite? Make a list that includes at least three people
 *  you’d like to invite to dinner. Then use your list to print a message to each person,
 *  inviting them to dinner.
 */
const guests = ["Waqas", "Waqar", "Hassan", "Ahsan"];
guests.forEach((guest) => {
    console.log(`Hi Mr.${guest}, Please come to my home tomorrow for a dinner at 18:00`);
});

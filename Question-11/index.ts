/***
 * Q11: Store the names of a few of your friends in a array called names.
 *  Print each person’s name by accessing each element in the list, one at a time.
 */

const names: string[] = [
  "Waqas Nazir",
  "Waqar Nazir",
  "Hassan Nazir",
  "Ahsan Nazir",
  "Saad Bashir",
];

names.map((name: string) => {
  console.log(name);
});

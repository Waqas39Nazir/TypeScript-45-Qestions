/****
 * Q41: Magicians: Make a array of magician’s names. Pass the array
 *  to a function called show_magicians(), which prints the name
 *  of each magician in the array.
 */

const magicianNames: string[] = ["Waqas", "Saad", "Ahsan", "Hamza"];

const show_magicians = (names: string[]) => {
  names.map((name: string) => {
    console.log("Name:", name);
  });
};

show_magicians(magicianNames);

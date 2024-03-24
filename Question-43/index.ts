/***
 * Q43: Unchanged Magicians: Start with your work from Exercise 40.
 *  Call the function make_great() with a copy of the array of
 *  magicians’ names. Because the original array will be unchanged,
 *  return the new array and store it in a separate array.
 *  Call show_magicians() with each array to show that you have
 *  one array of the original names and one array with the Great
 *  added to each magician’s name.
 */

let magicianNames: string[] = ["Waqas", "Saad", "Ahsan", "Hamza"];
let magicianNamesCopy: string[] = [...magicianNames];

const show_magicians = (names: string[]) => {
  names.map((name: string) => {
    console.log(name);
  });
};

const make_great = (magicians: string[]) => {
  const array = magicians.map((name) => {
    return "Great " + name;
  });

  return array;
};

const greatMagiciansArray = make_great(magicianNamesCopy);

console.log("Magicians Array");
show_magicians(magicianNames);

console.log("\nGreat Magicians Array");
show_magicians(greatMagiciansArray);

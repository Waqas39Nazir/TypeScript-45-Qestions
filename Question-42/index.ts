/***
 * Q42: Great Magicians: Start with a copy of your program from Exercise 39.
 *  Write a function called make_great() that modifies the array of magicians
 *  by adding the phrase the Great to each magician’s name. Call show_magicians()
 *  to see that the list has actually been modified.
 */

let magicianNames: string[] = ["Waqas", "Saad", "Ahsan", "Hamza"];

const show_magicians = (names: string[]) => {
  names.map((name: string) => {
    console.log(name);
  });
};

const make_great = (magicians: string[]) => {
  const array = magicians.map((name) => {
    return "Great " + name;
  });

  magicianNames = array;
};

make_great(magicianNames);

show_magicians(magicianNames);

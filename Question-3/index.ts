/***
 * Q3: Name Cases: Store a person’s name in a variable,
 * and then print that person’s name in lowercase,
 *  uppercase, and titlecase.
 */

let personName: string = "Waqas Nazir";

console.log("Name in lowercase:", personName.toLowerCase());
console.log("Name in uppercase:", personName.toUpperCase());

const titleCaseHandler = (name: string): string => {
  const value = name.split(" ");
  const firstName = value[0];
  const lastName = value[1];

  const capitalizeFirstName: string =
    /****
     * converting first letter to uppercase string and
     * then concating the firstname remaining characters
     * with first letter using array slice method
     */
    firstName.charAt(0).toUpperCase() + firstName.slice(1);

  const capitalizelastName: string =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return capitalizeFirstName + " " + capitalizelastName;
};
console.log("Name in titlecase:", titleCaseHandler(personName));

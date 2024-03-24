/***
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default
 *  with a message that reads I love TypeScript. Make a large shirt and a medium shirt
 *  with the default message, and a shirt of any size with a different message.
 */

const make_shirt = (
  size: string = "L",
  message: string = "I Love TypeScript"
): void => {
  console.log(
    `The shirt with size ${size} has the message \"${message}\" printed on it.`
  );
};

make_shirt();
make_shirt("M");
make_shirt("SM", "I can, I will");

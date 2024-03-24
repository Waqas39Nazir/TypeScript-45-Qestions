/***
 * Q40: Album: Write a function called make_album() that builds a Object
 *  describing a music album. The function should take in an artist name
 *  and an album title, and it should return a Object containing these
 *  two pieces of information. Use the function to make three dictionaries
 *  representing different albums. Print each return value to show that
 *  Objects are storing the album information correctly. Add an optional
 *  parameter to make_album() that allows you to store the number of tracks
 *  on an album. If the calling line includes a value for the number of tracks,
 *  add that value to the album’s Object. Make at least one new function call
 *  that includes the number of tracks on an album.
 */

interface album {
  artistName: string;
  albumTitle: string;
  tracks?: number;
}

const make_album = (
  artistName: string,
  albumTitle: string,
  tracks?: number
): album => {
  return {
    artistName,
    albumTitle,
    tracks,
  };
};

const albumOne = make_album("Vicy", "Tin Tan Ton");
const albumTwo = make_album("Kashi", "Youthiya");
const albumThree = make_album("Don", "Bilo Rani", 12);

// console.log("Album Two:", albumTwo);
// console.log("Album Three:", albumThree);

console.log(
  "Album One Data\n",
  "Arist Name:",
  albumOne.artistName,
  "\n",
  "Album Title:",
  albumOne.albumTitle
);

console.log("\n");

console.log(
  "Album Two Data\n",
  "Arist Name:",
  albumTwo.artistName,
  "\n",
  "Album Title:",
  albumTwo.albumTitle
);

console.log("\n");

console.log(
  "Album Three Data\n",
  "Arist Name:",
  albumThree.artistName,
  "\n",
  "Album Title:",
  albumThree.albumTitle,
  "\n",
  "Album Tracks:",
  albumThree.tracks
);

/**
 * Directions Reduction
 *
 * Write a function dirReduc which will take an array of strings and
 * returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 27
 * @url     : https://www.codewars.com/kata/directions-reduction/train/javascript
 *
 */

function dirReduc(arr) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  };
  console.log("tttt");
  const answer = arr.reduce((acc, v, i) => {
    if (acc[acc.length - 1] === opposite[v]) {
      acc.pop();
    } else {
      acc.push(v);
    }
    return acc;
  }, []);
  return answer;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);

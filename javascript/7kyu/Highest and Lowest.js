/**
 * Highest and Lowest
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 23
 * @url     : https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
 *
 */

function highAndLow(numbers) {
  const arr = numbers.split(" ").sort((a, b) => a - b);
  return arr[arr.length - 1] + " " + arr[0];
}

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

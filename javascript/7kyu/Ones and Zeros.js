/**
 * Ones and Zeros
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 18
 * @url     : https://www.codewars.com/kata/ones-and-zeros/train/javascript
 *
 */

const binaryArrayToNumber = arr => {
  // your code
  return parseInt(arr.join(""), 2);
};

binaryArrayToNumber([0, 0, 0, 1]);
binaryArrayToNumber([0, 0, 1, 0]);
binaryArrayToNumber([1, 1, 1, 1]);
binaryArrayToNumber([0, 1, 1, 0]);

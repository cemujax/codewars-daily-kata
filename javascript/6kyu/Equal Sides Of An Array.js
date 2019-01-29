/**
 * Equal Sides Of An Array
 *
 * The lowest index N where the side to the left of N is equal to the side to the right of N.
 * If you do not find an index that fits these rules, then you will return -1.
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 20
 * @url     : https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
 *
 */

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((a, x) => a + x, 0);
    const rightSum = arr.slice(i + 1).reduce((a, x) => a + x, 0);
    if (leftSum === rightSum) return i;
  }
  return -1;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);

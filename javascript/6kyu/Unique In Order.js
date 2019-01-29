/**
 * Unique In Order
 *
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items
 * without any elements with the same value next to each other and preserving the original order of elements.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 25
 * @url     : https://www.codewars.com/kata/unique-in-order/train/javascript
 *
 */

const uniqueInOrder = iterable => {
  const arr = [...iterable];
  return arr.filter((v, i) => v !== arr[i - 1]);
};

uniqueInOrder("AAAABBBCCDAABBB"); // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder("ABBCcAD"); // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); // [1,2,3]

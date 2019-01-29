/**
 * List Filtering
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 18
 * @url     : https://www.codewars.com/kata/list-filtering/train/javascript
 *
 */

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(n => typeof n === "number");
}

filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123]);

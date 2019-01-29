/**
 * Format a string of names
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 24
 * @url     : https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
 *
 */

function list(names) {
  const answer = names.reduce((ans, obj, index, names) => {
    if (index === names.length - 2) {
      ans += obj.name + " & ";
    } else if (index === names.length - 1) {
      ans += obj.name;
    } else {
      ans += obj.name + ", ";
    }
    return ans;
  }, "");
}

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
list([{ name: "Bart" }, { name: "Lisa" }]);
list([{ name: "Bart" }]);
list([]);

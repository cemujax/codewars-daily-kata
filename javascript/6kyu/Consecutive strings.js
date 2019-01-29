/**
 * Consecutive strings
 *
 * You are given an array strarr of strings and an integer k.
 * Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 20
 * @url     : https://www.codewars.com/kata/consecutive-strings/train/javascript
 *
 */

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

  let longestWord = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    const tempStr = strarr.slice(i, i + k).join("");
    if (longestWord.length < tempStr.length) longestWord = tempStr;
  }
  return longestWord;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // "abigailtheta"
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0); // ""
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3); // "ixoyx3452zzzzzzzzzzzz"

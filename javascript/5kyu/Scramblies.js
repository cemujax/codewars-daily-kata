/**
 * Scramblies
 *
 * Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
 * can be rearranged to match str2, otherwise returns false.
 * Only lower case letters will be used (a-z). No punctuation or digits will be included.
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 01. 29
 * @url     : https://www.codewars.com/kata/scramblies/train/javascript
 *
 */

function scramble(str1, str2) {
  const alphaArr = Array(26).fill(0);

  str2.split("").forEach(s => alphaArr[s.charCodeAt() - 97]++);
  str1.split("").forEach(s => alphaArr[s.charCodeAt() - 97]--);

  return alphaArr.every(v => v <= 0);
}

scramble("rkqodlw", "world"); // True
scramble("cedewaraaossoqqyt", "codewars"); // True
scramble("katas", "steak"); // False
